import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechGrid from './components/TechGrid'
import YourStack from './components/YourStack'
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedStack, setSelectedStack] = useState([])

  // Load technology dataset from public/technologies.json
  useEffect(() => {
    setLoading(true)
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch technology data')
        }
        return res.json()
      })
      .then((data) => {
        setTimeout(() => {
          setTechnologies(data)
          setLoading(false)
        }, 350)
      })
      .catch((err) => {
        console.error('Error fetching data:', err)
        toast.error('Failed to load technologies. Please try again.')
        setLoading(false)
      })
  }, [])

  // Add technology to stack
  const handleAddToStack = (tech) => {
    // Duplicate check
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id)

    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`, {
        icon: '⚠️',
      })
      return
    }

    setSelectedStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`, {
      icon: '🎉',
    })
  }

  // Remove single technology from stack
  const handleRemoveFromStack = (techId, techName) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId))
    toast.info(`${techName} removed from your stack.`, {
      icon: '🗑️',
    })
  }

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return
    setSelectedStack([])
    toast.error('All technologies removed from your stack.', {
      icon: '🧹',
    })
  }

  // Auth button click handler
  const handleAuthClick = (action) => {
    toast.info(`${action} feature will be available soon!`, {
      icon: '🔐',
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfd] text-slate-800">
      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Sticky Navbar */}
      <Navbar onAuthClick={handleAuthClick} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('technologies')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
          onLearnMoreClick={() => {
            const el = document.getElementById('technologies')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        />

        {/* Technologies & Your Stack Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              
              {/* Technology Grid: 3 columns out of 4 on large screens */}
              <div className="lg:col-span-3">
                <TechGrid
                  technologies={technologies}
                  selectedStack={selectedStack}
                  onAddTech={handleAddToStack}
                />
              </div>

              {/* Your Stack Sidebar: 1 column out of 4 on large screens */}
              <div className="lg:col-span-1 lg:sticky lg:top-24">
                <YourStack
                  stack={selectedStack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>

            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
