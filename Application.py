import flask

Application = flask.Flask(
	__name__,
	template_folder = "Templates",
	static_folder = "Static"
)

@Application.route("/")
def Index():
	return flask.render_template("Index.html")

Application.run()