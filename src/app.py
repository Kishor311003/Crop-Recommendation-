from flask import Flask, request, jsonify
import pickle # Load the trained model
import joblib
import pandas as pd


app = Flask(__name__)



# Load the trained model
model = joblib.load('d:/Crop Yield Predection/first-app/src/Component/crop_prod4.pkl')


# Load the saved model
# model = pickle.load('d:/Crop Yield Predection/first-app/src/Component/crop_prod4.pkl',rb)

# Now, you can use the loaded model for predictions or other tasks

# Load your machine learning model here (as you have done before)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Get input data from the POST request
    input_data = [data['state'], data['dist'], data['year'], data['season'], data['Crop'], data['area']]  # Adjust this to match your model's input format

    # Make predictions
    input_data = pd.get_dummies(input_data) 
    predicted_production = model.predict([input_data])

    # Return predictions as JSON response
    response = {'predicted_production': predicted_production}
    return jsonify(response)

if __name__ == '__main':
    app.run(debug=True)



# if __name__ == '__main':
#     app.run()