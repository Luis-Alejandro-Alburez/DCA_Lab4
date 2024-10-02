/**********    Laboratorio 04  ********************
 * 
 * 
 * Complementa el objeto images de la tarea anterior con dos nuevos 
 * métodos (sin reescribir todo el objeto):

    1.    edit- que toma tres argumentos ( title, artist, y date) y 
          si encuentra una imagen con el título dado en la lista, 
          cambia sus propiedades artist y date;
    2.    delete- que toma el argumento title y si encuentra una imagen 
          con este título en la lista, la elimina 
          (para eliminar un elemento de la lista, use el método splice)
*   

    Además, agregue un método show al Imageconstructor que mostrará 
    información sobre esta imagen. No reescriba el constructor.
    Utilice prototipos para este propósito. 
    Luego, modify el showmétodo del objeto de imágenes de modo 
    que utilice el showmétodo de imagen única recién creado para 
    mostrar la información.

    Pruebe el script llamando a la secuencia:
 */

    const images = {
        list: [],
        add: function(title, artist, date) {
            this.list.push({ title, artist, date });
        },
    
        contains: function(searchTitle) {
            return this.list.some(item => item.title === searchTitle);
        },
    
        show: function() {
            if (this.list.length === 0) {
                console.log("The list is empty.");
            } else {
                this.list.forEach(item => {
                    console.log(`Title: ${item.title}, Artist: ${item.artist}, Date: ${item.date}`);
                });
            }
        },
    
        clear: function() {
            this.list = [];
            console.log("The list has been cleared.");
        },

        edit: function(title, newArtist, newDate) {
            const item = this.list.find(item => item.title === title);
            if (item) {
                item.artist = newArtist;
                item.date = newDate;
                console.log(`Updated: Title: ${item.title}, Artist: ${item.artist}, Date: ${item.date}`);
            } else {
                console.log(`Item with title "${title}" not found.`);
            }
        },
    
        delete: function(title) {
            const index = this.list.findIndex(item => item.title === title);
            if (index !== -1) {
                this.list.splice(index, 1);
                console.log(`Item with title "${title}" has been deleted.`);
            } else {
                console.log(`Item with title "${title}" not found.`);
            }
        }
    
    };

    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);  
    images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
    images.delete('The Last Supper');
    images.show();
    // -> Mona Lisa (Leonardo da Vinci, 1504)
    // -> The Starry Night (Vincent van Gogh, 1889)