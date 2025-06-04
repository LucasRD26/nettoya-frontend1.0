// Formateador de errores de API
export const handleApiError = (error) => {
  const defaultMessage = 'Error de conexión. Intente nuevamente.';
  return {
    message: error.response?.data?.message || error.message || defaultMessage,
    code: error.response?.status || 500,
    data: error.response?.data || null
  };
};

// Formateador de fechas
export const formatDate = (dateString, options = {}) => {
  const defaultOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('es-ES', {
    ...defaultOptions,
    ...options
  });
};

// Formateador de precios
export const formatPrice = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  }).format(amount);
};

// Capitalizar strings
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Función debounce para búsquedas
export const debounce = (fn, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
