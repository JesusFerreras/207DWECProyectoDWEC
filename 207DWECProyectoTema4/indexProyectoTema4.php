<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Jesús Ferreras">
        <link rel="stylesheet" href="../webroot/css/estilos.css">
        <title>DWEC Tema 4</title>
    </head>
    <body>
        <header>
            <h1>Tema 4: Modelo de objetos del documento (DOM y BOM)</h1>
            <div>
                <a href="../207DWECProyectoTema3/indexProyectoTema3.php">&#10094; Anterior</a>
                <a href="../207DWECProyectoTema5/indexProyectoTema5.php">Siguiente &#10095;</a>
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
                        '01' => 'Pruebas con BOM Window',
                        '02' => 'Pruebas con BOM Navigator',
                        '03' => 'Pruebas con BOM Screen',
                        '04' => 'Pruebas con BOM Location',
                        '05' => 'Pruebas con BOM History',
                        '06' => 'Pruebas con DOM I',
                        '07' => 'Pruebas con DOM II',
                        '08' => 'Pruebas con DOM III',
                        '09' => 'Pruebas con CSS I',
                        '10' => 'Pruebas con CSS II',
                        '11' => 'Pruebas con DOM IV'
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