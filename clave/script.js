document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');

    // Generar números aleatorios
    const numbers = Array.from({ length: 10 }, (_, i) => i);
    numbers.sort(() => Math.random() - 0.5);

    // Crear elementos de la cuadrícula
    for (let i = 0; i < numbers.length; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.textContent = numbers[i];

        // Eventos de mouse para cada elemento
        gridItem.addEventListener('mouseover', () => {
            // Cambiar el contenido del todos los elementos a asteriscos
            gridContainer.querySelectorAll('.grid-item').forEach(item => {
                item.textContent = '*';
            });
        });

        gridItem.addEventListener('mouseout', () => {
            // Restaurar el contenido original de todos los elementos
            gridContainer.querySelectorAll('.grid-item').forEach((item, i) => {
                item.textContent = numbers[i];
            });
        });

        gridContainer.appendChild(gridItem);
    }
});
