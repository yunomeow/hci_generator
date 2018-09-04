<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>清交HCI大頭貼產生器</title>
	<script src="js/jquery-2.1.3.js"></script>
	<script src="js/jquery.elastic.source.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.Jcrop.js"></script>
	<script src="js/jquery.color.js"></script>
	<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/jquery.Jcrop.css" type="text/css" />
    <!-- Custom styles for this template -->
    <link href="css/site.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  
<body>

	<div class="container">
	<h1>清交HCI大頭貼產生器</h1>
	<img src="logo.png" width="300px" height="300px"/>
	<hr>
	<div class="btn-container">
	
		<input type="file" id="id_image_large" name="image_large"  accept="image/*" class="hide" >
		<label class="choose-file" id="upload" for="id_image_large">
			<div class="btn btn-info" id="upload_btn">上傳圖片</div>
		</label>
		<div class="btn btn-success" onclick="makeImage()" id="get_result">裁切並下載結果</div>
	</div>
	<div id="preview_image"></div>
	</div>
	<img src="addon.png" class="hide" id="addon"/>
	<canvas class="hide" id="myCanvas" style="border:1px solid #d3d3d3;">
		Your browser does not support the HTML5 canvas tag.
	</canvas>
</body>
<script src="js/gen.js"></script>

</html>