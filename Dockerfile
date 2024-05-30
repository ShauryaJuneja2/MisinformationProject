FROM python:3.10

WORKDIR /MisinformationProject

COPY . /MisinformationProject

RUN pip install -r requirements.txt

CMD hypercorn Application:Application --port=8080 --host=0.0.0.0