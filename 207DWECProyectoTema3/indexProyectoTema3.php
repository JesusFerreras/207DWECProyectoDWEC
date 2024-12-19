<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jesús Ferreras">
        <link rel="stylesheet" href="../webroot/css/estilos.css">
        <title>DWEC Tema 3</title>
    </head>
    <body>
        <header>
            <h1>Tema 3: Objetos, funciones y estructuras de datos</h1>
            <div>
                <a href="../207DWESProyectoTema2/indexProyectoTema2.php">&#10094; Anterior</a>
                <a href="../207DWESProyectoTema4/indexProyectoTema4.php">Siguiente &#10095;</a>
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
                        '01' => 'Pruebas con objetos I',
                        '02' => 'Pruebas con objetos II',
                        '03' => 'Pruebas con objetos III',
                        '04' => 'Pruebas con objetos Math',
                        '05' => 'Pruebas con objetos Date',
                        '06' => 'Pruebas con objetos RegExp',
                        '07' => 'Pruebas con recursividad',
                        '08' => 'Pruebas con funciones predefinidas I',
                        '09' => 'Pruebas con funciones predefinidas II',
                        '10' => 'Pruebas con JSON',
                        '11' => 'Pruebas con arrays I',
                        '12' => 'Pruebas con arrays II',
                        '13' => 'Pruebas con arrays III',
                        '14' => 'Pruebas con strings I',
                        '15' => 'Pruebas con strings II',
                        '16' => 'Programa "Encriptación de un mensaje"'
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