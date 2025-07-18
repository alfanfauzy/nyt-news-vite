import { Heart, ExternalLink } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About This App</h3>
            <p className="text-gray-600 leading-relaxed">
              A modern search interface for The New York Times articles, built with React and TypeScript. 
              Discover, explore, and stay informed with the latest news and stories.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.nytimes.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  The New York Times
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://developer.nytimes.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  NYT Developer Portal
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://help.nytimes.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  Help Center
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Built With</h3>
            <ul className="space-y-2 text-gray-600">
              <li>React & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
              <li>React Router</li>
              <li>Axios</li>
              <li>Lucide React</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for news enthusiasts
          </p>
          <p className="text-gray-500 text-sm mt-2 sm:mt-0">
            © 2024 NYT Search. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}