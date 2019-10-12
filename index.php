<!DOCTYPE html>
<html>

<body>

    <?php
        // print
        echo "Hello World!<br>";
        echo "Hello World!<br>";
        echo "Hello World!<br>";

        // variable
        $txt = "Bangladesh";
        echo "I love $txt!";
        echo "<br>";

        $x = 5;
        $y = 4;
        echo $x + $y;
        echo "<br>";

        // if else
        $t = date("H");

        if ($t < "20") {
            echo "Have a good day!";
        }
        echo "<br>";

        // switch case
        $favcolor = "red";

        switch ($favcolor) {
            case "red":
                echo "Your favorite color is red!";
                break;
            case "blue":
                echo "Your favorite color is blue!";
                break;
            case "green":
                echo "Your favorite color is green!";
                break;
            default:
                echo "Your favorite color is neither red, blue, nor green!";
        }
        echo "<br>";

        // for loop
        for ($x = 0; $x <= 10; $x++) {
            echo "The number is: $x <br>";
        }

        $colors = array("red", "green", "blue", "yellow");

        foreach ($colors as $value) {
            echo "$value <br>";
        }
        echo "<br>";

        // function
        function writeMsg() {
            echo "Hello world!";
        }
        
        writeMsg();
        echo "<br>";

        // arry
        $cars = array("Volvo", "BMW", "Toyota");
        echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
        echo "<br>";
        sort($cars);
        $clength = count($cars);
        for($x = 0; $x < $clength; $x++) {
            echo $cars[$x];
            echo "<br>";
        }

        // oop
        /*class Fruit {
            // Properties
            public $name;
            public $color;
          
            // Methods
            function set_name($name) {
              $this->name = $name;
            }
            function get_name() {
              return $this->name;
            }
            function set_color($color) {
              $this->color = $color;
            }
            function get_color() {
              return $this->color;
            }
          }
          
          $apple = new Fruit();
          $apple->set_name('Apple');
          $apple->set_color('Red');
          echo "Name: " . $apple->get_name();
          echo "<br>";
          echo "Color: " .  $apple->get_color();
          echo "<br>";

          $banana = new Fruit();
          $banana->set_name('Banana');
          $banana->set_color('Yellow');
          echo "Name: " . $banana->get_name();
          echo "<br>";
          echo "Color: " .  $banana->get_color();*/

        // constructor
        class Fruit {
            public $name;
            public $color;
          
            function __construct($name, $color) {
              $this->name = $name;
              $this->color = $color;
            }
            function get_name() {
              return $this->name;
            }
            function get_color() {
              return $this->color;
            }
          }
          
          $apple = new Fruit("Apple", "red");
          echo $apple->get_name();
          echo "<br>";
          echo $apple->get_color();
?><br><br>

    <form action="welcome.php" method="post">
    Name: <input type="text" name="name"><br>
    E-mail: <input type="text" name="email"><br>
    <input type="submit">
    </form>


</body>

</html>