<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jesús Ferreras">
        <link rel="stylesheet" href="../webroot/css/estilos.css">
        <title>DWEC Tema 6</title>
    </head>
    <body>
        <header>
            <h1>Tema 6: Comunicación asíncrona y solicitudes de red</h1>
            <div>
                <a href="../207DWECProyectoTema5/indexProyectoTema5.php">&#10094; Anterior</a>
                <a href="">Siguiente &#10095;</a>
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
                        '01' => 'Pruebas con promesas I',
                        '02' => 'Pruebas con promesas II',
                        '03' => 'Pruebas con Fetch I',
                        '04' => 'Pruebas con Fetch II',
                        '05' => 'Pruebas con Fetch III',
                        '06' => 'Pruebas con Fetch VI',
                        '07' => 'Pruebas con Fetch V',
                        '08' => 'Pruebas con Fetch VI',
                        '09' => 'Pruebas con Leaflet',
                        '10' => 'Pruebas con Cookies'
                    ];

                    foreach (scandir('.') as $entry) {
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
                ?>
            </table>
        </main>
        <footer>
            <a href="../../index.html">Jesús Ferreras González</a>
            <a href="../indexProyectoDWEC.php">DWEC</a>
            <a href="https://github.com/JesusFerreras/207DWECProyectoDWEC.git" target="_blank"><img src="../doc/github.png" alt="github"></a>
        </footer>
    </body>
</html>