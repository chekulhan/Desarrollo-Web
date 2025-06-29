# Docker NGINX logs

docker build -t sre-nginx .
docker run -d --name sre-nginx-container -p 8080:80 sre-nginx

docker exec -it 7c37aeb33ac0 sh

Por defecto, NGINX manda los resultados de logs a docker logs para su gestion:

(symlinks = simbolic links = shortcuts)

/var/log/nginx # ls -l /var/log/nginx
total 0
lrwxrwxrwx    1 nginx    nginx           11 Jun 24 21:25 access.log -> /dev/stdout
lrwxrwxrwx    1 nginx    nginx           11 Jun 24 21:25 error.log -> /dev/stderr
/var/log/nginx # 


curl http://localhost:8080
curl http://localhost:8080/hola
curl http://localhost:8080/adios

Copiar el archivo desde el contenedor al local:
docker cp sre-nginx-container:/var/log/nginx/access.log ./access.log



Crear un entorno virtual y:

>> python -m venv .venv


# Activiadad 1: SMOKE TEST

pip install requests

# Actividad 2:

pip install apache-log-parser



# Actividad 3:
Hacemos esto en Google Colab?

colab.new

pip install pandas



df['status'].dtype
df['status'] = pd.to_numeric(df['status'])
df[df["status"].isin([500])]


today = pd.Timestamp.today().date()
past_dates = df[df['time_received_datetimeobj'].dt.date <= today]