
        let map;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: 0, lng: 0 }, // Default center
            });
        }

        // Ensure that the Google Maps API script is loaded before accessing the API
        function loadGoogleMapsScript() {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyABaZ0A1021jm-vyTBx8aO8tvXOGqIhIB8&callback=initMap';
            script.defer = true;
            script.async = true;
            document.body.appendChild(script);
        }

        document.getElementById('getLocationBtn').addEventListener('click', () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    // Update map center and add a marker
                    const userLocation = { lat: latitude, lng: longitude };
                    map.setCenter(userLocation);
                    new google.maps.Marker({
                        position: userLocation,
                        map: map,
                        title: "Your Location",
                    });

                    const locationResult = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
                    document.getElementById('locationResult').innerHTML = locationResult;
                });
            } else {
                document.getElementById('locationResult').innerHTML = "Geolocation is not available on this device.";
            }
        });

        // Load the Google Maps API script
        loadGoogleMapsScript();

        document.getElementById('findChargingStationsBtn').addEventListener('click', () => {
            window.location.href = "maps.html"; // Redirect to the map page
        });


        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
        
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
        
            if (email === "Guduribhargava@gmail.com" && password === "123456789") {
                window.location.href = "maps.html";
            } else {
                alert("Incorrect email or password");
            }
        });