# 🌟 Mythology Wiki 🌟

### 🖥️ **Backend**
El **Backend** está desarrollado con **Node.js** y **Express**, y se conecta a una base de datos **MongoDB** para gestionar tanto los datos de la Wiki como la información de los usuarios. Además, implementa un sistema de **autenticación seguro** utilizando **JWT** (JSON Web Tokens).

**Principales responsabilidades del Backend:**
- **Conexión a MongoDB**: Almacena y gestiona la información de la Wiki y los usuarios.
- **Autenticación y autorización**: Utiliza JWT para proteger rutas y garantizar que solo los usuarios autenticados accedan a ciertas funcionalidades.
- **Gestión de usuarios**: Permite la creación, modificación y eliminación de usuarios, asegurando la seguridad de las contraseñas mediante encriptación con **bcrypt**.

---

### 📱 **Frontend**
El **Frontend** está construido con **React** y **Redux**, proporcionando una interfaz de usuario interactiva que muestra los datos de la Wiki y permite a los usuarios gestionar sus configuraciones.

**Principales responsabilidades del Frontend:**
- **Visualización de datos**: Muestra la información de mitos y leyendas de diversas culturas de forma dinámica.
- **Panel de usuario**: Los usuarios pueden actualizar su información personal, como su nombre o apodo.
- **Gestión de usuarios por admins**: Los administradores pueden modificar los datos de otros usuarios y gestionar sus roles.

---

## Tabla de Contenidos
1. [Autor](#autor)
2. [Descripción](#descripción)
3. [Instalación](#instalación)
4. [Dependencias](#dependencias)
5. [Funcionalidad](#funcionalidad)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Uso del Proyecto](#uso-del-proyecto)
8. [Wiki](#wiki)

### Autor
Sergio Martínez Padilla

### 🖥️ **Descripción (Backend)**

El backend está desarrollado con **Node.js**, **Express**, y **MongoDB**. Proporciona la base para conectar con la base de datos MongoDB y manejar las rutas de la API. Además, cuenta con rutas protegidas mediante **JWT**, lo que garantiza una autenticación segura para el manejo de usuarios y datos.

### 📱 **Descripción (Frontend)**

El frontend está construido con **React** y **Redux**, y permite a los usuarios interactuar con los mitos almacenados en la base de datos. Los usuarios pueden explorar mitos y leyendas de diferentes culturas y modificar algunos de sus datos personales en la sección de **Configuración**.  
Si el usuario tiene el rol de **admin**, podrá gestionar la información de otros usuarios, otorgando un control total sobre el sistema.

---

## Instalación

Sigue estos pasos para poner en marcha el proyecto tanto en el **Backend** como en el **Frontend**.

### Pasos para la instalación:

1. **Clona el repositorio:**

    git clone https://github.com/SerMP904/Mythology_wiki.git

2. **Abre el proyecto en Visual Studio Code.**

3. **Instalación y ejecución del Backend:**

    - Navega al directorio del backend:

    cd Backend

    - Instala las dependencias necesarias:

    npm install

    - Ejecuta el backend en modo desarrollo:

    npm run dev

4. **Instalación y ejecución del Frontend:**

    - Navega al directorio del frontend:

    cd ../Frontend

    - Instala las dependencias:

    npm install

    - Ejecuta el frontend en modo desarrollo:

    npm run dev

5. **Creación de la wiki**

    - Tras crear un usuario, se crea la base de datos.

    - En MongoDB, en la colección **myths** se puede importar la información que mostrará la wiki

---

### Backend
- **express**: Framework minimalista para Node.js para gestionar rutas y peticiones HTTP.
- **cors**: Middleware para habilitar solicitudes de origen cruzado (CORS).
- **dotenv**: Carga las variables de entorno desde un archivo `.env`.
- **bcrypt**: Para encriptar las contraseñas de los usuarios.
- **jsonwebtoken**: Para generar y verificar JSON Web Tokens (JWT).
- **mongoose**: ODM para MongoDB, facilita la interacción con la base de datos.
- **nodemon**: Herramienta para reiniciar automáticamente el servidor en desarrollo.

### Frontend
- **react**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **react-dom**: Implementación de la interfaz DOM para React.
- **react-redux**: Conecta React con el store de Redux.
- **redux**: Biblioteca para gestionar el estado global de la aplicación.
- **react-router-dom**: Para la gestión de rutas en la aplicación React.
- **vite**: Herramienta de construcción que permite un desarrollo rápido.

## Funcionalidad del Proyecto

### 🖥️ **Backend**

1. **Autenticación con JWT**
   - 🔒 **Protección de rutas**: Solo los usuarios autenticados pueden acceder a rutas protegidas.
   - 🔑 **Middleware con autenticación**: Asegura que las peticiones incluyan un token válido para acceder a ciertos recursos.
   - 🛡️ **Validación de tokens**: Verifica la validez del JWT para garantizar que las solicitudes provengan de usuarios legítimos.

2. **Gestión de usuarios**
   - ✍️ **Registrar nuevos usuarios**: Permite que los usuarios se registren en la plataforma.
   - 🔐 **Contraseñas encriptadas con bcrypt**: Utiliza bcrypt para encriptar las contraseñas, asegurando la seguridad de los datos del usuario.

3. **Conexión a Mongoose**
   - 🗄️ **Esquemas Mongoose**: Utiliza Mongoose para definir esquemas de datos, facilitando la interacción con la base de datos MongoDB.

---

### 📱 **Frontend**

1. **Wiki**
   - 🌍 **Información sobre culturas antiguas**: Muestra mitos, leyendas y datos históricos de diferentes culturas en una interfaz interactiva.

2. **Configuración**
   - ✏️ **Cambio de nombre o apodo**: Permite al usuario personalizar su nombre o apodo dentro de la plataforma.

3. **Configuración de usuarios**
   - 👤 **Gestión de usuarios por admin**: Si el usuario tiene el rol de "admin", puede modificar la información de otros usuarios, incluyendo roles y detalles.

4. **Logout**
   - 🚪 **Cerrar sesión**: Permite al usuario salir de la plataforma de forma segura.

🖥️ Estructura (Backend)

El archivo '.env' contiene las siguientes variables de entorno:

- **PORT**: Dirección del puerto donde se ejecuta el servidor.
- **MONGO_URL**: URL de conexión a la base de datos **MongoDB**.
- **BCRYPT_ROUNDS**: Número de rondas para la encriptación de contraseñas con **bcrypt**.
- **TOKEN**: Token utilizado para la encriptación de contraseñas.
- **TOKEN_REFRESH**: Segundo token utilizado para la renovación de sesiones o tokens.

Estructura (Frontend)
/src
  /components
  /core
  /pages

app.jsx
main.jsx

### 📱 **Uso del Proyecto (Frontend)**

1. **Ejecuta el servidor de desarrollo**  
   - 🖥️ **Iniciar servidor**: En la carpeta **Frontend**, abre una terminal y ejecuta el siguiente comando para iniciar el servidor:

     ```bash
     npm run dev
     ```

2. **Abre la URL generada**  
   - 🌐 **Accede a la URL**: Una vez que el servidor esté en funcionamiento, abre tu navegador y accede a la URL generada (generalmente `http://localhost:3000`).

3. **Registrarse o Iniciar sesión**  
   - 🔑 **Registrar nuevo usuario**: Rellena los campos para crear un nuevo usuario. Para que un usuario sea **admin**, hay que cambiar su rol en la base de datos una vez se haya registrado correctamente.
   - 🔑 **Login de usuario**: Usa un **email** y **contraseña válidos** para ingresar a la aplicación.

4. **Explora la Wiki**  
   - 📚 **Acceder a la Wiki**: Después de iniciar sesión, podrás explorar la información sobre mitos y leyendas en la Wiki. También puedes interactuar con las opciones en el **header** o **footer** de la página.


### Wiki
- Ejemplos para agregar información a la wiki (Nota: como las url de las imágenes son muy largas, he dejado solo algunas como ejemplo):

1.   {
  "_id": {
    "$oid": "69662f70bf041b311af9058a"
  },
  "pantheon": "japoneses",
  "overview": "El panteón japonés es complejo, con una mezcla de mitología sintoísta y budista, donde los dioses y espíritus (kami y yokais) interactúan constantemente con el mundo humano. Los kami son seres divinos que gobiernan aspectos de la naturaleza y la vida, mientras que los yokais son criaturas sobrenaturales que pueden ser tanto benévolas como maliciosas.",
  "representation": "data:image/jpeg;base64,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",
  "majorGod": {
    "name": "Amateratsu",
    "symbols": [
      "El Sol",
      "La Luz",
      "La Vida"
    ],
    "description": "Amateratsu es la diosa del sol y una de las figuras más veneradas en el panteón japonés. Es la fuente de toda luz y calor, y su presencia mantiene el orden en el mundo. Según la leyenda, su retiro en una cueva oscureció el mundo hasta que los otros dioses la persuadieron a salir.",
    "portrait": "https://i.pinimg.com/474x/4a/be/fb/4abefbd98c62006ee87aafeffebbc759.jpg"
  },
  "otherGods": [
    {
      "name": "Tsukuyomi",
      "symbols": [
        "la Noche",
        "La Luna",
        "El Silencio"
      ],
      "description": "Tsukuyomi es el dios de la luna y la noche. Es conocido por su distanciamiento de los demás dioses, especialmente de su hermana Amateratsu, con quien tuvo un conflicto debido a un desacuerdo sobre el orden natural del mundo. Representa la calma y el misterio de la noche.",
      "portrait": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0_BZfXOE-WkUivJE9ORLUASsWHwjTQx7qw&s",
      "_id": {
        "$oid": "69662f70bf041b311af9058b"
      }
    },
    {
      "name": "Susanoo",
      "symbols": [
        "Las Tormentas",
        "El Mar",
        "El Caos"
      ],
      "description": "Susanoo es el dios de las tormentas, el mar y el caos. Es famoso por sus acciones impulsivas, como cuando derrotó a la serpiente de ocho cabezas Yamata-no-Orochi. Aunque a menudo es descrito como un dios temperamental, tiene un rol crucial en el mantenimiento del equilibrio entre el orden y el caos.",
      "portrait": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbMzmCKtQLB9s9DiQeAf1vCDXL6Pp7KbCvw&s",
      "_id": {
        "$oid": "69662f70bf041b311af9058c"
      }
    },
    {
      "name": "Inari",
      "symbols": [
        "El Arroz",
        "La Prosperidad",
        "Los Zorros"
      ],
      "description": "Inari es la diosa de la agricultura, especialmente del arroz, y la prosperidad. Se la asocia estrechamente con los zorros (kitsune), quienes son considerados sus mensajeros. En muchas representaciones, Inari es una deidad femenina, pero también tiene algunas apariencias masculinas, lo que la convierte en una figura ambigua y poderosa.",
      "portrait": "",
      "_id": {
        "$oid": "69662f70bf041b311af9058d"
      }
    },
    {
      "name": "Benzaiten",
      "symbols": [
        "La Música",
        "La Riqueza",
        "La Belleza"
      ],
      "description": "Benzaiten es la diosa de la música, las artes, el amor y la belleza. Originalmente una deidad hindú, fue adoptada en el panteón japonés donde se asocia también con la riqueza y la prosperidad. Su imagen se muestra a menudo tocando el biwa, un instrumento tradicional japonés.",
      "portrait": "",
      "_id": {
        "$oid": "69662f70bf041b311af9058e"
      }
    },
    {
      "name": "Hachiman",
      "symbols": [
        "El Guerrero",
        "El Arco",
        "La Victoria"
      ],
      "description": "Hachiman es el dios de la guerra y el protector de los guerreros. Aunque inicialmente se le veneraba como una deidad de la protección, con el tiempo se convirtió en el patrono de los samuráis. Su imagen es la de un guerrero con armadura, normalmente con un arco y flechas.",
      "portrait": "data:image/jpeg;base64,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",
      "_id": {
        "$oid": "69662f70bf041b311af9058f"
      }
    }
  ],
  "manuscript": {
    "name": "Kojiki",
    "description": "El Kojiki es una de las obras más antiguas de la literatura japonesa. Recopila los mitos fundacionales del Japón, incluyendo la genealogía de los dioses y la creación del mundo. Es considerado un texto esencial para entender la cosmovisión japonesa antigua y la legitimación divina de la familia imperial."
  },
  "tales": [
    {
      "name": "La creación de Japón por Izanagi e Izanami",
      "description": "Los dioses primordiales Izanagi e Izanami recibieron la misión de crear la tierra. Al agitar el océano con la lanza celestial Amenonuhoko, formaron las islas de Japón. De su unión nacieron numerosos kami, pero tras la muerte de Izanami, Izanagi descendió al Yomi, el mundo de los muertos, marcando la separación entre la vida y la muerte."
    },
    {
      "name": "El ocultamiento de Amaterasu",
      "description": "Amaterasu, diosa del sol, se ocultó en una cueva tras una disputa con su hermano Susanoo, sumiendo al mundo en la oscuridad. Los demás dioses realizaron una ceremonia sagrada para atraerla fuera, devolviendo la luz al mundo y reafirmando el orden divino y el equilibrio del cosmos."
    },
    {
      "name": "Susanoo y la derrota de Yamata no Orochi",
      "description": "El dios del viento y las tormentas, Susanoo, se enfrentó al monstruo Yamata no Orochi, una gigantesca serpiente de ocho cabezas. Tras embriagarla con sake, Susanoo la derrotó y encontró en su interior la espada Kusanagi, uno de los tres tesoros sagrados de Japón."
    }
  ],
  "monsters": [
    {
      "name": "Asura",
      "description": "Los Asura son seres semidivinos, generalmente descritos como guerreros con múltiples rostros y brazos. Aunque originarios del budismo, en la mitología japonesa representan la lucha interna, el caos y la guerra. Son conocidos por su feroz deseo de poder y su capacidad para desafiar a los dioses.",
      "_id": {
        "$oid": "69662f70bf041b311af90590"
      }
    },
    {
      "name": "Kitsune",
      "description": "Los kitsune son zorros mágicos que tienen la capacidad de transformarse en humanos. Su poder aumenta con el tiempo y el número de colas que poseen, lo que les da gran poder místico. A menudo se les asocia con el dios Inari, y se dice que pueden tener tanto una naturaleza benévola como traviesa.",
      "_id": {
        "$oid": "69662f70bf041b311af90591"
      }
    },
    {
      "name": "Oni",
      "description": "Los oni son demonios gigantes y poderosos, generalmente representados con piel roja o azul, cuernos y una gran fuerza. Son conocidos por su brutalidad y se asocian a menudo con el castigo y la destrucción. En las leyendas, los oni son derrotados por héroes valientes o engañados por astutas personas.",
      "_id": {
        "$oid": "69662f70bf041b311af90592"
      }
    },
    {
      "name": "Tengu",
      "description": "Los tengu son criaturas míticas con apariencia de pájaro humanoide. Se cree que habitan en las montañas y los bosques, y son conocidos por su destreza en las artes marciales. Aunque en un principio se consideraban demonios, con el tiempo han sido vistos como protectores de la naturaleza y guardianes del equilibrio.",
      "_id": {
        "$oid": "69662f70bf041b311af90593"
      }
    },
    {
      "name": "Yuki-onna",
      "description": "La Yuki-onna es un espíritu femenino que aparece en noches de nieve. Es conocida por su belleza mortal y su capacidad para congelar a sus víctimas con su aliento gélido. Aunque algunas versiones de la leyenda la presentan como una figura vengativa, otras la muestran como un espíritu más trágico.",
      "_id": {
        "$oid": "69662f70bf041b311af90594"
      }
    }
  ],
  "__v": 0
}

--------------------------------------------------------------------------------------------------------------------

2. {
  "_id": {
    "$oid": "69663149bf041b311af905a1"
  },
  "pantheon": "griegos",
  "overview": "La mitología griega está llena de dioses, héroes y criaturas mitológicas. Los dioses olímpicos gobiernan el mundo, interactuando con los humanos, luchando entre ellos y ayudando o castigando a los mortales. Cada dios y diosa tiene un dominio específico, y su poder influye directamente en los eventos del mundo antiguo.",
  "representation": "",
  "majorGod": {
    "name": "Zeus",
    "symbols": [
      "El Rayo",
      "El Cielo",
      "El Trono"
    ],
    "description": "Zeus es el rey de los dioses olímpicos, el gobernante del cielo y el trueno. Es conocido por su autoridad, su poder y sus múltiples amores y descendencia con diosas y mortales. Su influencia es absoluta, y su voluntad se impone tanto a los dioses como a los hombres.",
    "portrait": ""
  },
  "otherGods": [
    {
      "name": "Atenea",
      "symbols": [
        "El Buho",
        "La Lanza",
        "El Olivo"
      ],
      "description": "Atenea es la diosa de la estrategia, la sabiduría y las artes. Hija de Zeus, nació de su cabeza completamente armada y preparada para la guerra. Es conocida como la diosa patrona de Atenas, ciudad que lleva su nombre. También es la diosa de los héroes y se le asocia con la justicia y la defensa.",
      "portrait": "data:image/jpeg;base64,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",
      "_id": {
        "$oid": "69663149bf041b311af905a2"
      }
    },
    {
      "name": "Poseidón",
      "symbols": [
        "El Caballo",
        "El Mar",
        "El Tridente"
      ],
      "description": "Poseidón es el dios del mar, los terremotos y los caballos. Hermano de Zeus, Poseidón posee el tridente, con el cual puede controlar las aguas y desatar tormentas. Se dice que gobernó la mítica Atlántida, y su temperamento es tan volátil como las aguas que domina.",
      "portrait": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32FvmLfSRljRLiFD8GOdTNkckVhFg9F4zSg&s",
      "_id": {
        "$oid": "69663149bf041b311af905a3"
      }
    },
    {
      "name": "Hera",
      "symbols": [
        "El Pavo Real",
        "La Corona",
        "El Cielo"
      ],
      "description": "Hera es la diosa del matrimonio, la familia y el cielo. Es la esposa de Zeus, aunque su matrimonio estuvo marcado por los celos debido a las muchas infidelidades de su esposo. Es conocida por su naturaleza vengativa, especialmente hacia los mortales y diosas que tuvieron relaciones con Zeus.",
      "portrait": "",
      "_id": {
        "$oid": "69663149bf041b311af905a4"
      }
    },
    {
      "name": "Apolo",
      "symbols": [
        "La Lira",
        "El Sol",
        "El Arco"
      ],
      "description": "Apolo es el dios del sol, la música, la poesía, la profecía y la medicina. Es hijo de Zeus y Leto, y se le representa con la lira, el arco y flechas, así como el sol que representa su luz. Su templo en Delfos fue uno de los más famosos lugares de culto de la antigua Grecia.",
      "portrait": "",
      "_id": {
        "$oid": "69663149bf041b311af905a5"
      }
    },
    {
      "name": "Artemisa",
      "symbols": [
        "Las Cazadoras",
        "La Luna",
        "El Ciervo"
      ],
      "description": "Artemisa es la diosa de la caza, los animales salvajes y la naturaleza. Hermana gemela de Apolo, se la representa con arco y flechas, a menudo acompañada por ciervos y otros animales. Es una diosa protectora de las mujeres jóvenes y es conocida por su independencia y fuerza.",
      "portrait": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoB5bHWv3RAe9qh-sRf_-G2UFOIxlb-lktsQ&s",
      "_id": {
        "$oid": "69663149bf041b311af905a6"
      }
    }
  ],
  "manuscript": {
    "name": "La Iliada",
    "description": "La Iliada es un poema épico atribuido a Homero que narra los eventos ocurridos durante la guerra de Troya, centrándose en la ira de Aquiles y sus consecuencias. La obra presenta a varios héroes y dioses intercediendo en la lucha, y la tragedia del conflicto que define el destino de muchas naciones."
  },
  "tales": [
    {
      "name": "La creación del mundo según Hesíodo",
      "description": "En el origen existía el Caos, del cual surgieron Gea, el Tártaro y Eros. Gea dio vida a Urano, el cielo, y juntos engendraron a los Titanes. Tras la Titanomaquia, Zeus y los dioses olímpicos derrotaron a los Titanes y establecieron el orden divino que rige el cosmos."
    },
    {
      "name": "Las doce tareas de Heracles",
      "description": "Heracles, hijo de Zeus, fue castigado por Hera a servir al rey Euristeo, quien le impuso doce tareas casi imposibles. Entre ellas se encuentran derrotar al león de Nemea, matar a la Hidra de Lerna, capturar al jabalí de Erimanto, limpiar los establos de Augías y descender al inframundo para capturar a Cerbero. Estas hazañas simbolizan la fuerza, la resistencia y la redención del héroe."
    },
    {
      "name": "La guerra de Troya",
      "description": "La guerra de Troya fue un conflicto épico entre griegos y troyanos, iniciado por el rapto de Helena. Durante diez años, héroes como Aquiles, Héctor y Odiseo participaron en la contienda, que culminó con la caída de Troya gracias al engaño del caballo de madera y la intervención de los dioses olímpicos."
    }
  ],
  "monsters": [
    {
      "name": "Medusa",
      "description": "Medusa es una de las Gorgonas, una criatura con serpientes en lugar de cabello. Cualquier mortal que mire directamente a sus ojos se convierte en piedra. Medusa fue transformada en un monstruo por Atenea como castigo por su belleza y por haber sido violada por Poseidón en su templo.",
      "_id": {
        "$oid": "69663149bf041b311af905a7"
      }
    },
    {
      "name": "Minotauro",
      "description": "El Minotauro es una criatura mitad hombre, mitad toro, que vive en un laberinto construido por el rey Minos en Creta. Fue el producto de la unión entre la esposa de Minos, Pasífae, y un toro sagrado. El héroe Teseo, con la ayuda de Ariadna, logra matar al Minotauro y escapar del laberinto.",
      "_id": {
        "$oid": "69663149bf041b311af905a8"
      }
    },
    {
      "name": "Cérbero",
      "description": "Cérbero es el perro de tres cabezas que guarda las puertas del inframundo, evitando que los muertos escapen. Es un monstruo feroz que puede ser apaciguado solo por los dioses o en situaciones muy específicas. Fue uno de los desafíos de Hércules, quien tuvo que capturarlo como una de sus doce tareas.",
      "_id": {
        "$oid": "69663149bf041b311af905a9"
      }
    },
    {
      "name": "Quimera",
      "description": "La Quimera es una criatura monstruosa con la cabeza de un león, el cuerpo de una cabra y la cola de una serpiente. Respira fuego y es una amenaza mortal para los héroes que intentan enfrentarse a ella. Fue derrotada por Belerofonte, quien la mató montando a Pegaso.",
      "_id": {
        "$oid": "69663149bf041b311af905aa"
      }
    }
  ],
  "__v": 0
},


