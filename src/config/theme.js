// Theme configuration for reusable colors, gradients, and styles
export const theme = {
  colors: {
    primary: '#ef4444', // red-500
    secondary: '#f97316', // orange-500
    dark: '#000000',
    darkGray: '#111111',
    grayLight: '#f3f4f6',
    text: '#ffffff',
    textSecondary: '#d1d5db',
    textMuted: '#9ca3af',
  },
  
  gradients: {
    hero: 'bg-gradient-to-b from-gray-900 via-black to-gray-900',
    card: 'bg-gradient-to-br from-gray-900/50 to-black/50',
    accent: 'bg-gradient-to-r from-red-500 to-orange-500',
    hover: 'hover:border-red-500/50',
  },

  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },

  borderRadius: {
    sm: '0.375rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },

  transitions: {
    fast: 'transition-all duration-150',
    base: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  },
}

export const buttonVariants = {
  primary: 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black',
  outline: 'border-2 border-gray-400 text-gray-400 hover:border-white hover:text-white',
}

export const sizeVariants = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}
