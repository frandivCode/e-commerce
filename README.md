#  Altos Tragos | E-commerce

<h3>Tienda de bebidas y herramientas de bar. </h3>

> LINKS:

* [Web](https://e-commerce-francode.netlify.app)

* [GitHub](https://github.com/frandivCode)

---

> Curso: React JS - CoderHouse - Comisión 60045

* **Alumno**: Francisco Zapata.
* **Profesora**: Laura Gonzalez Martin.
* **Tutor Adjunto**: Sergio López Rey.

---

> [!IMPORTANT]
> Herramientas Utilizadas:

* Jsx - React Js
* React-Router-Dom => Para gestionar la navegación de las rutas de la webApp.
* Hooks - Algunos usados: useState, useParams, useContext, useEffect.
* Uso de Props
* CSS - Para dar los estilos a la Single Page Application.
* HTML - Uso de forma mínima en el index y en las etiquetas semánticas junto a la escritura en jsx.
* JavaScript - Para la lógica de la aplicación escrito como jsx.
* Netlify - Como alojamiento y desplegamiento de la Web.
* Firebase - Para guardar las órdenes de compra con la info de los usuarios, y la subida de los productos.
* Toastify - Uso de librería para el aviso con alerta de "producto agregado".

![image](https://github.com/user-attachments/assets/09bb3851-8f1c-44b2-a0f1-330181e7aad1)
![image](https://github.com/user-attachments/assets/e27f4435-1fa4-43b0-93a4-9f2da115d562)
![image](https://github.com/user-attachments/assets/86312436-d34d-45ff-bbd7-f801a74c985b)
![image](https://github.com/user-attachments/assets/1496e492-825a-4e31-81ca-8b26836fdbce) 
![image](https://github.com/user-attachments/assets/a4735e28-43b3-4e29-9330-7ee1166efd8c)
![image](https://github.com/user-attachments/assets/e8be5317-335b-42f1-a439-aeea4ae937f1)


---

> [!NOTE] 
>  Proyecto Final -> 100%

- [x] Directorio *src/* con la carpeta *assets/* con las imágenes de íconos y de productos, carpeta de *components/* , *context/* , *firebase/* ,*stylesheets/* y las *views/*. También archivos principales para la iniciar la app (main.jsx, App.jsx e Index.html).

- [x] Carpeta principal con la documentación, como este mismo *Readme.md*, y archivos de configuraciones.

- [x] CartContext => uso de useContext/Provider para poder usar las funciones en los componentes hijos.

> Components/

- [x] Header -> Con el nombre del e-commerce (con link al Home '/').

- [x] Navbar -> Con categorías y el CartWidget.

- [x] CartWidget -> el número se desmonta dependiendo si hay o no productos en él. Usé un icon importando un script para poder darle uso.

- [x] CheckOut 

    *   CheckOut / Brief -> detalle de compra ya finalizada con los datos del usuario y generación de la orden que queda guardada en Firebase, borrado del carrito automático y botón para volver al *Home*.

    *   UserInfo -> con el fomulario para generar la orden que se guarda en Firebase, con validaciones de los inputs.

    *   Carrito -> detalle de cada ítem en la vista del carrito con renderizado condicional, botones para incrementar o decrementar la cantidad del producto basandose en el stockDisponible. Nombre del producto, img, cantidad (+) y (-), precio unitario y total, también incluye la opción de eliminar el producto con la (X) y vaciar el carrito.

- [x] Catálogo -> de productos, separados por categorías y a su vez, 
vista de todos los productos en el Home ('/'), cada categoría con sus rutas con React-Router-Dom(rutas en App.jsx / NavBar.jsx).

- [x] ItemListContainer -> contenedor de todas las Cards con sus datos.
    * ItemList -> Diseño de la card del producto.

    * ItemDetailContainer -> Es el que recibe el producto en detalle una vez clickeado la card.

    * ItemDetail
        * ItemCount => ContadorComp, para incrementar {handleSumar} o decrementar 		           {handleRestar} la cantidad, y un botón para agregar el producto al carrito                           {handleAgregar}.
        * Descripcion + precio + stock (con funcion para que vaya bajando la cant de stock).

- [x] Carrousel (extra) -> Para mostrar las marcas de bebidas que tenemos.

- [x] TextSlider (extra) -> Textos descriptivos que llaman la atención del cliente para resumir la page. 

- [x] Footer -> Para darle la finalización a la página, con las categorias y el link de mi github.



---

> [!NOTE]
> Pre-Entrega 2 => 100%

- [x] Uso de React-router-dom.
- [x] Se crearon las cards de los productos con su contador.
- [x] Componente Navbar con cart y diferentes caterogías de productos.
- [x] Home con las cards de todos los productos y Logo con link al home con path='/'
- [x] Link al detalle de cada uno de los productos.
- [x] Integración con parámetros de async-mocks utilizando efects y hooks.

---

> [!NOTE]
> Pre-Entrega 1 => 100%

- [x] Componente Header (extra) (Logo).
- [x] Componente NavBar (Enlaces con las categorias).
- [x] Componente CartWidget (con ícono y nº hardcodeado - dentro de NavBar).
- [x] Componente contenedor ItemListContainer.jsx con una prop greeting.
- [x] Componente Footer (extra).


---

> Instalación de proyecto  / Correr proyecto

* **Clonar el repositorio**: bash git clone https://github.com/frandivCode/e-commerce.git
* **Instalar las dependencias**: npm install
* ** Iniciar la aplicación**: npm run dev

O link para desplegar la Web:
* [Web](https://e-commerce-francode.netlify.app)

<br>

<h3>¡Gracias por ver :fa-heart-o: !</h3>
<h5> atte frandivCode.</h5>
