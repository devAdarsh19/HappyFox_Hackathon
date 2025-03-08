```markdown
# Weather Forecasting Web Application

## Project Description
A web application that fetches and displays real-time weather data.

## Tools and Skills Utilized
- Python
- Django
- HTML
- CSS
- JavaScript
- Bootstrap
- NewsAPI
- Git
- VS Code

## Setup and Execution Steps

1. **Set up a Django project and configure the environment.**
   ```bash
   django-admin startproject weather_forecast
   cd weather_forecast
   python manage.py startapp weather
   ```

   Update `weather_forecast/settings.py`:
   ```python
   INSTALLED_APPS = [
       ...
       'weather',
   ]
   ```

2. **Create models for storing weather data.**
   In `weather/models.py`:
   ```python
   from django.db import models

   class WeatherData(models.Model):
       city = models.CharField(max_length=100)
       temperature = models.FloatField()
       description = models.CharField(max_length=200)
       timestamp = models.DateTimeField(auto_now_add=True)
   ```

   Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

3. **Use NewsAPI to fetch weather data.**
   In `weather/views.py`:
   ```python
   import requests
   from django.shortcuts import render

   def fetch_weather(request):
       city = request.GET.get('city', 'London')
       api_key = 'YOUR_NEWSAPI_KEY'
       url = f'http://api.weatherapi.com/v1/current.json?key={api_key}&q={city}'
       response = requests.get(url)
       data = response.json()
       return render(request, 'weather/index.html', {'data': data})
   ```

4. **Design the frontend using HTML, CSS, and Bootstrap.**
   In `weather/templates/weather/index.html`:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Weather Forecast</title>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
   </head>
   <body>
       <div class="container">
           <h1 class="mt-5">Weather Forecast</h1>
           <form method="get" action="{% url 'fetch_weather' %}">
               <div class="form-group">
                   <label for="city">City:</label>
                   <input type="text" class="form-control" id="city" name="city">
               </div>
               <button type="submit" class="btn btn-primary">Get Weather</button>
           </form>
           {% if data %}
           <div class="mt-5">
               <h2>Weather in {{ data.location.name }}</h2>
               <p>Temperature: {{ data.current.temp_c }}°C</p>
               <p>Description: {{ data.current.condition.text }}</p>
           </div>
           {% endif %}
       </div>
   </body>
   </html>
   ```

5. **Implement JavaScript for dynamic content.**
   In `weather/static/weather/script.js`:
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       // JavaScript code for dynamic content
   });
   ```

   Include the script in `index.html`:
   ```html
   <script src="{% static 'weather/script.js' %}"></script>
   ```

6. **Deploy the application using a hosting service.**
   - Choose a hosting service (e.g., Heroku, AWS, DigitalOcean).
   - Follow the service's documentation to deploy the Django application.
```

```