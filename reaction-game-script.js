
        var start = new Date().getTime();

        var shape = document.getElementById("shape");

        var sum = 0;

        var avg = 0;

        var clicks = 0;

        function randomShape() {

            if (Math.random() > 0.5) {
                return "50%";
            } else {
                return "0%";
            }

        }

        function getRandomColor() {

            var r = Math.floor(Math.random() * 256);

            var g = Math.floor(Math.random() * 256);

            var b = Math.floor(Math.random() * 256);

            var color = "rgb(" + r + ", " + g + ", " + b + ")";
            
            return color;

        }

        function makeShapeAppear() {

            if (clicks == 5) {

                avg = (sum / clicks).toFixed(3);

                alert("Your average reaction time was " + avg);

                clicks = 0;

                sum = 0;

                var answer = window.confirm("Do you want to continue?");

                if (answer) {
                    appearAfterDelay();
                } else {
                    document.getElementById("timeTaken").innerHTML = avg + "s on average";
                    return;
                }

                // appearAfterDelay();

            }

            var top = Math.random() * 400;

            var left = Math.random() * 1000;

            var borderRadius = randomShape();            

            var width = (Math.random() * 200) + 100;

            shape.style.backgroundColor = getRandomColor();

            shape.style.width = width;

            shape.style.height = width;

            shape.style.borderRadius = borderRadius;

            shape.style.top = top + "px";

            shape.style.left = left + "px";

            shape.style.display = "block";

            start = new Date().getTime();

        }

        function appearAfterDelay() {

            setTimeout(() => {
                makeShapeAppear()
            }, Math.random() * 2000);

        }

        appearAfterDelay();
            
        shape.onclick = function() {

            clicks++;

            shape.style.display = "none";
            
            var end = new Date().getTime();

            var timeTaken = (end - start) / 1000;

            document.getElementById("timeTaken").innerHTML = timeTaken + "s";

            appearAfterDelay();

            sum = sum + timeTaken;

        }