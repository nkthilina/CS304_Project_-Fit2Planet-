
import { useState, useEffect } from "react";
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

import './Style.css'

const BmiCal = () => {

    const [bmiValues, setBmiValues] = useState(
        {
            weight: "",
            height: "",
            age: "",
            gender: "",

        }
    );

    const [massage, setMassage] = useState('');
    const [description, setDescription] = useState('');

    let total;
    const [bmi, setBmi] = useState('00.00')


    function handleChange(params) {
        const { name, value, type, checked } = params.target;
        setBmiValues({
            ...bmiValues,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    function calBmi(params) {
        params.preventDefault();

        if (bmiValues.Weight === "" || bmiValues.height === "") {
            alert('please Enter weight and hight')
        } else {
            // let total = bmiValues.weight / ((bmiValues.height / 100) * (bmiValues.height / 100))
            total = (bmiValues.weight / Math.pow(bmiValues.height / 100, 2))
            setBmi(total.toFixed(2));


            if (total < 18) {
                setMassage("Under Weight")
                setDescription("For an underweight person looking to achieve a healthy BMI, the focus should be on gradually increasing caloric intake through nutrient-dense foods such as lean proteins, whole grains, fruits, and vegetables. Aim to eat at least three meals per day with added snacks in between, and consider incorporating strength training exercises 2-3 times per week to build muscle mass. Limit cardio exercises to avoid burning excess calories. Additionally, getting enough sleep, managing stress, and staying hydrated are crucial for overall health. It is recommended to consult with a healthcare professional or registered dietitian to tailor a personalized plan that meets individual needs and goals.")

            } else if (total > 18 && total < 25) {
                setMassage("Normal Weight")
                setDescription("Maintaining a healthy BMI requires a balanced approach to nutrition and physical activity. A healthy diet should include plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats, while limiting processed and high-calorie foods. Engaging in regular exercise, including both cardio and strength training, is important for maintaining a healthy weight and supporting overall health. It is also important to prioritize good sleep hygiene, manage stress, and stay hydrated. Consultation with a healthcare professional or registered dietitian can help tailor a personalized plan that meets individual needs and goals.")

            } else if (total > 25 && total < 30) {
                setMassage("Over  Weight")
                setDescription("For an overweight person looking to achieve a healthy BMI, the focus should be on gradually losing weight through a combination of a healthy diet and regular physical activity. A balanced diet that includes plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats should be followed, while limiting processed and high-calorie foods. Portion control and tracking caloric intake may also be helpful. Engaging in regular exercise, including both cardio and strength training, is important for burning excess calories and building muscle mass. It is recommended to aim for at least 150 minutes of moderate-intensity exercise per week or 75 minutes of vigorous-intensity exercise per week. Additionally, getting enough sleep, managing stress, and staying hydrated are crucial for overall health. Consultation with a healthcare professional or registered dietitian can help tailor a personalized plan that meets individual needs and goals.")

            } else {
                setMassage("Obese")
                setDescription("For an obese person looking to achieve a healthy BMI, the focus should be on gradually losing weight through a combination of a healthy diet and regular physical activity. A balanced diet that includes plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats should be followed, while limiting processed and high-calorie foods. Portion control and tracking caloric intake may also be helpful. Engaging in regular exercise, including both cardio and strength training, is important for burning excess calories and building muscle mass. It is recommended to aim for at least 150 minutes of moderate-intensity exercise per week or 75 minutes of vigorous-intensity exercise per week. Additionally, getting enough sleep, managing stress, and staying hydrated are crucial for overall health. In some cases, medication or surgery may be recommended for weight loss. Consultation with a healthcare professional or registered dietitian can help tailor a personalized plan that meets individual needs and goals. ")

            }







        }

    }



    return (

        <div>
            <NavBar></NavBar>
            <section className="Bmi-bg-color mt-5 " >

                <div className="container py-5 h-100 mt-10">

                    <div className="card rounded-5">
                        <div className="card-body ">
                            <div className="row">

                                <div className="col-lg-5 text-center ">
                                    <h1 className="mb-5"> BMI Calculator </h1>
                                    <form action="" onSubmit={calBmi}>
                                        <div className="row mb-3">

                                            <div className="col-12">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Age</h5>
                                                    <input className="form-control" name='age' value={bmiValues.age} onChange={handleChange} type="number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Male</h5>
                                                    <input className="form-check-input h2" type="radio" onChange={handleChange} name="gender" value="Male" />

                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Fmale</h5>
                                                    <input className="form-check-input h2" type="radio" onChange={handleChange} name="gender" value="FMale" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Height(Cm)</h5>
                                                    <input className="form-control" name='height' value={bmiValues.height} onChange={handleChange} type="number" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Weight(Kg)</h5>
                                                    <input className="form-control" name='weight' value={bmiValues.weight} onChange={handleChange} type="number" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <div className=" border border-primary bg-light rounded-pill py-4 mx-5">
                                                    <h2 className="text-primary"> {bmi} </h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <div className="d-grid px-5 py-3">
                                                    <button className="btn btn-lg btn-primary rounded-pill" type="submit"> Calculate </button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-7 text-center px-5">
                                    <h2 className={`mb-5 ${massage == "Normal Weight" ? 'text-success' : 'text-danger'}`}> You Are {massage} </h2>
                                    <p className="small ">
                                        {description}
                                    </p>
                                    <section class="py-3">
                                        <div class="row text-center text-light mb-1">
                                            <div class="col-3 text-primary ">
                                                Below 18
                                            </div>
                                            <div class="col-3 text-success">
                                                18 - 25
                                            </div>
                                            <div class="col-3 text-warning">
                                                25 - 30
                                            </div>
                                            <div class="col-3 text-danger">
                                                Over 35
                                            </div>
                                        </div>
                                        <div class="row text-center text-light">
                                            <div class="col-3 bg-primary p-2 rounded-start">
                                                UnderWeight
                                            </div>
                                            <div class="col-3 bg-success p-2">
                                                NormalWeight
                                            </div>
                                            <div class="col-3 bg-warning p-2">
                                                OverWeight
                                            </div>
                                            <div class="col-3 bg-danger p-2 rounded-end">
                                                Obese
                                            </div>
                                        </div>
                                    </section>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <Footer></Footer>
        </div>

    )
}

export default BmiCal