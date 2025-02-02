<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jesús Ferreras">
        <title>Proyecto DWEC</title>
        <link rel="stylesheet" href="webroot/css/estilos.css">
    </head>
    <body>
        <header>
            <h1>Desarrollo Web en Entorno Cliente</h1>
        </header>
        <main>
            <div id="temas">
                <?php
                    $titulos = [
                        '207DWECProyectoTema1' => 'Tema 1: Selección de arquitecturas y herramientas de programación',
                        '207DWECProyectoTema2' => 'Tema 2: Manejo de la sintaxis del lenguaje',
                        '207DWECProyectoTema3' => 'Tema 3: Objetos, funciones y estructuras de datos',
                        '207DWECProyectoTema4' => 'Tema 4: Modelo de objetos del documento (DOM y BOM)',
                        '207DWECProyectoTema5' => 'Tema 5: Interacción con el usuario, eventos y formularios',
                        '207DWECExamen1' => 'Examen 1: '
                    ];

                    if ($handle = scandir('.')) {
                        foreach ($handle as $entry) {
                            if (substr($entry, 0, 7) == '207DWEC') {
                                $fichero = 'index'.substr($entry, 7).'.php';
                                print(<<<FIN
                                    <h3>$titulos[$entry]</h3>
                                    <ul>
                                        <li>
                                            <a href="$entry/$fichero">Ejercicios</a>
                                        </li>
                                    </ul>
                                FIN);
                            }
                        }
                    }
                ?>
            </div>
        </main>
        <footer>
            <a href="../index.html">Jesús Ferreras González</a>
            <a href="https://github.com/JesusFerreras/207DWECProyectoDWEC" target="_blank"><img src="doc/github.png" alt="github"></a>
        </footer>
    </body>
</html>