<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery AJAX Example</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        $("#loadData").click(function(){
            $.ajax({
                url: "example.php", 
                type: "GET", 
                dataType: "json", 
                success: function(response){ 
                  
                    $("#output").html(response.message);
                },
                error: function(xhr, status, error){ 
                  
                    console.error(error);
                }
            });
        });
    });
</script>
</head>
<body>

<button id="loadData">Load Data</button>
<div id="output"></div>

</body>
</html>
