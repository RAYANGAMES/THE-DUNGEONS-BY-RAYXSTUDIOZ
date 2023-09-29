<!DOCTYPE html>
<html>
<head>
    <title>Device Alert</title>
</head>
<body>
    <script>
        // Function to detect if the user is on a mobile device
        function isMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        }

        // Function to show an alert message for mobile users
        function showMobileAlert() {
            if (isMobileDevice()) {
                alert("This feature is only available on PC.");
            }
        }

        // Call the function when the page loads
        window.onload = showMobileAlert;
    </script>
</body>
</html>
