const imagenes = import.meta.glob('/src/assets/catalogo/*.avif', { eager: true, as: 'url' });

const Catalogo = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {Object.entries(imagenes).map(([nombre, url]) => (
        <img
          key={nombre}
          src={url}
          alt={nombre}
          style={{ width: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
      ))}
    </div>
  );
};

export default Catalogo;
