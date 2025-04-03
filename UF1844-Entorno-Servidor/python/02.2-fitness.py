import streamlit as st
import pandas as pd
import os
import matplotlib.pyplot as plt

# Ensure the data directory exists
DATA_DIR = "data"
os.makedirs(DATA_DIR, exist_ok=True)

WORKOUT_FILE = os.path.join(DATA_DIR, "workout_log.csv")
BMI_FILE = os.path.join(DATA_DIR, "bmi_log.csv")


# Function to load or create CSV files
def load_csv(file_path, columns):
    if not os.path.exists(file_path):
        df = pd.DataFrame(columns=columns)
        df.to_csv(file_path, index=False)
    return pd.read_csv(file_path)


# Load or create data files
workout_data = load_csv(WORKOUT_FILE, ["Date", "Exercise", "Sets", "Reps", "Weight (kg)"])
bmi_data = load_csv(BMI_FILE, ["Date", "Height (cm)", "Weight (kg)", "BMI"])


# ----------------------
# 1. Landing Page
# ----------------------
def landing_page():
    st.title("🏋️‍♂️ Fitness Progress Tracker")
    st.write("Track your workouts, monitor your BMI, and visualize your progress over time.")
    #st.image("assets/logo.png", use_column_width=True)
    st.sidebar.success("Select an option above to get started.")


# ----------------------
# 2. BMI Calculator
# ----------------------
def bmi_calculator():
    st.title("📏 BMI Tracker")
    
    height = st.number_input("Enter your height (cm)", min_value=100, max_value=250, step=1)
    weight = st.number_input("Enter your weight (kg)", min_value=30, max_value=200, step=1)
    
    if st.button("Calculate BMI"):
        bmi = round(weight / ((height / 100) ** 2), 2)
        st.success(f"Your BMI is: {bmi}")

        # Save BMI data
        new_entry = pd.DataFrame([[pd.Timestamp.today().date(), height, weight, bmi]], 
                                 columns=["Date", "Height (cm)", "Weight (kg)", "BMI"])
        new_entry.to_csv(BMI_FILE, mode="a", header=False, index=False)
        st.write("✅ BMI record saved!")

    # Display previous BMI records
    st.subheader("📊 BMI Progress")
    if not bmi_data.empty:
        st.line_chart(bmi_data.set_index("Date")[["BMI"]])


# ----------------------
# 3. Workout Logger
# ----------------------
def workout_logger():
    st.title("💪 Workout Logger")

    # User input for workout details
    exercise = st.text_input("Exercise Name")
    sets = st.number_input("Sets", min_value=1, max_value=10, step=1)
    reps = st.number_input("Reps", min_value=1, max_value=50, step=1)
    weight = st.number_input("Weight (kg)", min_value=1, max_value=300, step=1)
    
    if st.button("Log Workout"):
        new_entry = pd.DataFrame([[pd.Timestamp.today().date(), exercise, sets, reps, weight]], 
                                 columns=["Date", "Exercise", "Sets", "Reps", "Weight (kg)"])
        new_entry.to_csv(WORKOUT_FILE, mode="a", header=False, index=False)
        st.success("✅ Workout logged!")

    # Show workout history
    st.subheader("🏋️ Workout History")
    if not workout_data.empty:
        st.write(workout_data.tail(10))  # Show last 10 workouts


# ----------------------
# 4. Progress Visualization
# ----------------------
def progress_visualization():
    st.title("📈 Progress Tracker")

    # Load latest data
    workout_data = load_csv(WORKOUT_FILE, ["Date", "Exercise", "Sets", "Reps", "Weight (kg)"])
    
    if not workout_data.empty:
        st.subheader("Weight Lifted Over Time")
        fig, ax = plt.subplots()
        workout_data["Date"] = pd.to_datetime(workout_data["Date"])
        grouped = workout_data.groupby("Date")["Weight (kg)"].mean()
        ax.plot(grouped.index, grouped.values, marker='o', linestyle='-')
        ax.set_xlabel("Date")
        ax.set_ylabel("Avg Weight Lifted (kg)")
        ax.set_title("Weight Progression")
        st.pyplot(fig)
    else:
        st.warning("No workout data available.")

    # BMI Trend
    if not bmi_data.empty:
        st.subheader("BMI Trend Over Time")
        st.line_chart(bmi_data.set_index("Date")[["BMI"]])
    else:
        st.warning("No BMI data available.")


# ----------------------
# Main Navigation
# ----------------------
st.sidebar.title("Navigation")
page = st.sidebar.radio("Go to", ["🏠 Home", "📏 BMI Tracker", "💪 Workout Logger", "📈 Progress Tracker"])

if page == "🏠 Home":
    landing_page()
elif page == "📏 BMI Tracker":
    bmi_calculator()
elif page == "💪 Workout Logger":
    workout_logger()
elif page == "📈 Progress Tracker":
    progress_visualization()
