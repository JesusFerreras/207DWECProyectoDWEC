<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jesús Ferreras">
        <link rel="stylesheet" href="../webroot/css/estilos.css">
        <title>DWEC Tema 2</title>
    </head>
    <body>
        <header>
            <h1>Tema 2: Manejo de la sintaxis del lenguaje</h1>
            <div>
                <a href="../207DWESProyectoTema1/indexProyectoTema1.php">&#10094; Anterior</a>
                <a href="../207DWESProyectoTema3/indexProyectoTema3.php">Siguiente &#10095;</a>
            </div>
        </header>
        <main>
            <table class="contenido">
                <tr>
                    <th>Nº</th>
                    <th>Enunciado</th>
                    <th>Ejecutar</th>
                </tr>
                <?php
                    $enunciados = [
                        '01' => 'Pruebas con números',
                        '02' => 'Pruebas con texto, booleanos y conversiones de datos',
                        '03' => 'Pruebas con expresiones regulares I',
                        '04' => 'Pruebas con expresiones regulares II',
                        '05' => 'Pruebas con condicionales',
                        '06' => 'Pruebas con switch-case',
                        '07' => 'Pruebas con funciones',
                        '08' => 'Pruebas con bucles',
                        '09' => 'Programa "Adivina el Número"'
                    ];

                    if ($handle = scandir('.')) {
                        foreach ($handle as $entry) {
                            if (preg_match('/^[0-9]+$/', $entry)) {
                                $fichero = $entry.'/'.$entry.'.html';
                                print(<<<FIN
                                    <tr>
                                        <td>$entry</td>
                                        <td>$enunciados[$entry]</td>
                                        <td><a href="$fichero">&#x25B6;</a></td>
                                    </tr>
                                FIN);
                            }
                        }
                    }
                ?>
            </table>
        </main>
        <footer>
            <a href="../../index.html">Jesús Ferreras González</a>
            <a href="..//indexProyectoDWEC.php">DWEC</a>
            <a href="https://github.com/JesusFerreras/207DWECProyectoDWEC.git" target="_blank"><img src="doc/github.png" alt="github"></a>
        </footer>
    </body>
</html>