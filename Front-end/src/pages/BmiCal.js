
import { useState, useEffect } from "react";
import NaveBar from '../component/NaveBar';
import Footer from '../component/Footer';

import './Style.css'

const BmiCal = () => {

    let total
    const [bmiValues, setBmiValues] = useState(
        {
            weight: "",
            height: "",
            age: "",
            gender: "",

        }
    );

    // const [massage, setMassage] = useState( '')
    const [massage, setMassage] = useState(
        {
            Title: "",
            discription: "",
        }
    )

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
            setBmi((bmiValues.weight / ((bmiValues.height / 100) * (bmiValues.height / 100))).toFixed(2))

            console.log(bmi);

            if (total < 18.5) {
                setMassage({ Title: 'You Are Under Weight' });
            } else if (total >= 18.5 && total < 25) {
                setMassage({ Title: 'You Are Good' });
            } else if (total >= 25 && total < 30) {
                setMassage({ Title: 'You Are Over Weight' });
            } else {
                setMassage({ Title: 'You Are You Are Obese' });
            }

        }

    }

    function bmiCategory(params) {

        // if (params < 18.5) {
        //     // setMassage('You Are Under Weight');
        //     setMassage(

        //         {
        //             Title: "You Are Under Weight",
        //             discription: "For an underweight person looking to achieve a healthy BMI, the focus should be on gradually increasing caloric intake through nutrient-dense foods such as lean proteins, whole grains, fruits, and vegetables. Aim to eat at least three meals per day with added snacks in between, and consider incorporating strength training exercises 2-3 times per week to build muscle mass. Limit cardio exercises to avoid burning excess calories. Additionally, getting enough sleep, managing stress, and staying hydrated are crucial for overall health. It is recommended to consult with a healthcare professional or registered dietitian to tailor a personalized plan that meets individual needs and goals.",
        //         }

        //     );
        // } else if (params >= 18.5 && params < 25) {
        //     // setMassage('You Are Good');
        //     setMassage(
        //         {
        //             Title: "You Are Good",
        //             discription: "Maintaining a healthy BMI requires a balanced approach to nutrition and physical activity. A healthy diet should include plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats, while limiting processed and high-calorie foods. Engaging in regular exercise, including both cardio and strength training, is important for maintaining a healthy weight and supporting overall health. It is also important to prioritize good sleep hygiene, manage stress, and stay hydrated. Consultation with a healthcare professional or registered dietitian can help tailor a personalized plan that meets individual needs and goals.",
        //         }
        //     );
        // } else if (params >= 25 && params < 30) {
        //     setMassage('You Are Over Weight');
        // } else {
        //     setMassage('You Are Obese');
        // }

        // console.log(bmiValues);
        // console.log(params);
        // console.log(massage);


    }


    return (

        <div>
            <NaveBar></NaveBar>
            <section className="Bmi-bg-color mt-5 " >

                <div className="container py-5 h-100 mt-10">

                    <div className="card rounded-5">
                        <div className="card-body ">
                            <div className="row">

                                <div className="col-lg-5 text-center py-5">
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

                                <div className="col-lg-7 text-center py-5">


                                    <h3 className="mb-5"> {massage.Title} </h3>
                                    <p className="small">

                                    </p>
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