import os

import flask

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

Application = flask.Flask(
	__name__,
	template_folder = "Templates",
	static_folder = "Static"
)

@Application.route("/")
def Index():
	return flask.render_template("Index.html")