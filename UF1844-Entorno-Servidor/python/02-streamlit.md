

# Streamlit
https://streamlit.io/

**Entorno Virtual**

```bash
python -m venv venv
```

Activar en entorno virtual:
- Windows

```bash
venv\Scripts\activate
```

- macOS/Linux:

```bash
source venv/bin/activate
```

y desactivarlo con 
```bash
deactivate
```

**Pip install**

```bash
pip install streamlit
```

**Crear página principal y ejecutar el proyecto streamlit**

app.py:

```python
import streamlit as st

# Title of the app
st.title('Hello Streamlit')

# Simple text
st.write('This is a simple Streamlit app!')

# Display a slider
slider_value = st.slider('Pick a number', 0, 100, 25)
st.write(f'You selected: {slider_value}')
```

y ejecutarlo con:
```bash
streamlit run app.py
```


## Ejemplos
### 1. **Página Simple "Hola Mundo"**

```python
import streamlit as st

# Mostrando texto en la página web
st.title("¡Hola Streamlit!")
st.write("Esta es tu primera app en Streamlit.")

# También puedes agregar markdown y código
st.markdown("## Este es un encabezado en Markdown")
st.code("print('¡Hola Mundo!')", language="python")
```


### 2. **Entrada de texto con botones**
Este ejemplo crea una entrada de texto y un botón. Cuando se hace clic en el botón, se muestra el texto que el usuario ingresó.

```python

import streamlit as st

st.title("Ejemplo de Entrada de Texto")

# Crear entrada de texto
user_input = st.text_input("Ingresa tu nombre:")

# Crear botón para mostrar saludo
if st.button("¡Salúdame!"):
    st.write(f"¡Hola, {user_input}!")

```

### 3. **Casilla de verificación**
```python
import streamlit as st

st.title("Ejemplo de Casilla de Verificación")

# Crear casilla de verificación
agree = st.checkbox("Acepto los términos y condiciones")

if agree:
    st.write("Has aceptado los términos y condiciones.")
else:
    st.write("No has aceptado los términos y condiciones.")
```

### 4. **Selección desplegable**

```python
import streamlit as st

st.title("Ejemplo de Selectbox")

# Crear selectbox
option = st.selectbox("Elige un lenguaje de programación", ["Python", "JavaScript", "Ruby", "Java"])

# Mostrar la opción seleccionada
st.write(f"Seleccionaste {option}.")
```

### 5. Mostrar imagenes
```python
import streamlit as st
from PIL import Image

st.title("Ejemplo de Mostrar Imagen")

# Abrir una imagen
image = Image.open("ruta_a_tu_imagen.jpg")

# Mostrar la imagen
st.image(image, caption="¡Mi imagen genial!", use_column_width=True)
```

### 6. Cargador de archivo
```python
import streamlit as st

st.title("Ejemplo de Cargador de Archivos")

# Cargador de archivos
uploaded_file = st.file_uploader("Elige un archivo")

if uploaded_file is not None:
    st.write("¡Archivo cargado con éxito!")
    # Mostrar el contenido del archivo (si es un archivo de texto)
    st.text(uploaded_file.getvalue().decode("utf-8"))
```

### Estructura de sidebar y páginas
App.py - gestión de las páginas. Importaremos las funciones (def) de cada página. OJO, en streamlit online, !puede que funciona diferente!

```python
import streamlit as st

from page_1 import show_page_1
from home import show_home

# Título principal de la aplicación
st.title("Aplicación con Barra Lateral y Varias Páginas")

# Sidebar for page selection
page = st.sidebar.selectbox("Choose a page", ["Home", "Page 1", "Page 2", "Page 3"])

# Load the corresponding page
if page == "Home":
    show_home()
elif page == "Page 1":
    show_page_1()
elif page == "Page 2":
    print("Page 2")
elif page == "Page 3":
    print("page 3")
```

Cada página, como home.py o page_1.py, tendrá una funcion:
home.py:
```python

import streamlit as st

def show_home():
    st.title("Bienvenido a la Página Principal")
    st.write("Este es el contenido de la página de inicio de tu aplicación.")
    st.write("Desde aquí puedes navegar a otras páginas de la app.")
    st.image("https://picsum.photos/800/400", caption="Imagen de bienvenida")

```
page_1.py:
```python
import streamlit as st

# Define a function to render the content for Page 1
def show_page_1():
    st.subheader("Bienvenido a la Página 1")
    st.write("Este es el contenido de la primera página de tu aplicación.")
    
    # Example of an interactive widget
    name = st.text_input("¿Cuál es tu nombre?")
    
    if name:
        st.write(f"Hola, {name}! Bienvenido a la Página 1.")
    
    # Example of an interactive button
    if st.button("Haz clic aquí para una sorpresa"):
        st.write("¡Has hecho clic en el botón! 🎉")
    
    # Adding an image (just for fun)
    st.image("https://picsum.photos/200/300", caption="Imagen aleatoria de Picsum")

    # You could also use more advanced widgets, like a slider
    number = st.slider("Selecciona un número", 0, 100, 50)
    st.write(f"Has seleccionado el número: {number}")
    
    # You could also add a chart or any other content
    st.line_chart([1, 2, 3, 4, 5, 6])

```




