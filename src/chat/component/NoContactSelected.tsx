export const NoContactSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <h2 className="text-2xl font-semibold mb-3">
        No hay contacto seleccionado
      </h2>
      <p className="text-muted-foreground">
        Por favor, seleccione un cliente primero para ver sus detalles.
      </p>
    </div>
  );
};
