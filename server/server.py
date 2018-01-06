from flask import *
import pandas as pd
import numpy as np
app = Flask(__name__, static_folder="../static/dist",
			template_folder="../static")

@app.route("/")
def show_tables():
    df = pd.read_pickle('data/stats_df.pickle')
    # df.set_index(['PLAYER_NAME'], inplace=True)
    subset_df = df.loc[:, ['PLAYER_NAME', 'PTS', 'REB', 'AST', 'BLK']]
    return render_template('index.html',tables=subset_df.to_html(index=False),
    		my_string="hello????")

@app.route("/api/stats")
def get_stats():
	df = pd.read_pickle('data/stats_df.pickle')
	subset_df = df.loc[:, ['PLAYER_NAME', 'PTS', 'REB', 'AST', 'BLK']]
	data = {}
	# data['data'] = subset_df.to_json(orient='values')
	data['data'] = subset_df.values.tolist()
	data['count'] = subset_df.shape[0]
	print data['count']
	data['keys'] = ['PLAYER_NAME', 'PTS', 'REB', 'AST', 'BLK']
	return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)