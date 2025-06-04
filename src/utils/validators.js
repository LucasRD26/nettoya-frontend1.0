export const emailValidator = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? '' : 'Ingrese un email válido';
};

export const passwordValidator = (password) => {
  if (password.length < 8) return 'Mínimo 8 caracteres';
  if (!/[A-Z]/.test(password)) return 'Al menos una mayúscula';
  if (!/[0-9]/.test(password)) return 'Al menos un número';
  return '';
};

export const phoneValidator = (phone) => {
  const regex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;
  return regex.test(phone) ? '' : 'Teléfono inválido';
};

export const dateValidator = (date) => {
  return Date.parse(date) ? '' : 'Fecha inválida';
};

export const requiredValidator = (value) => {
  return value?.trim() ? '' : 'Este campo es requerido';
};
