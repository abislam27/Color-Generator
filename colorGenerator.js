		function randomColorGenerater()
		{
			var values = "0123456789ABCDEF".split('');
			var colorValue = '#';

			for (var i = 0; i < 6; i++)
			{
				colorValue += values[Math.floor(Math.random() * 16)];
			}
			return colorValue;
		}

		document.getElementById("generate").onclick = function()
		{
			var colorNum = "#";
			colorNum += document.getElementById("one").value + 
						document.getElementById("two").value +
						document.getElementById("three").value +
						document.getElementById("four").value +
						document.getElementById("five").value +
						document.getElementById("six").value;
			document.getElementById("color-num").innerHTML = colorNum;			
			document.getElementById("color-box").style.backgroundColor = colorNum;
		}

		document.getElementById("random-generate").onclick = function()
		{
			var randomColorNum = randomColorGenerater();
			document.getElementById("random-color-num").innerHTML = randomColorNum;
			document.getElementById("random-color-box").style.backgroundColor = randomColorNum;
		}