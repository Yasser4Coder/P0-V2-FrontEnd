/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Frame from "./Frame";
import { motion } from "framer-motion";
import WorningTitle from "./WorningTitle";
import BackGround from "../pages/home/components/BackGround";
import Button from "./Button";
import Peragraph from "./Peragraph";

const Unauthorized = () => {
  const [showFrame, setShowFrame] = useState(false);
  const [character, setCharacter] = useState("center");
  const [dark, setDark] = useState(false);
  const [start, setStart] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    hasTeam: "",
    teamName: "",
    nationalId: "",
    skill: "",
    linkedin: "",
    portfolio: "",
    major: "",
    university: "",
    tshirtSize: "",
  });

  useEffect(() => {
    setCharacter("left");
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.lastName || !formData.email) {
      setError(true);
      setErrorMassage("Please fill in all required fields.");
      return;
    }

    setError(false);
    setStart(true);

    try {
      // Save data to Firestore
      await addDoc(collection(db, "registrations"), {
        ...formData,
        createdAt: new Date(),
      });

      setStart(false);
      setIsSaved(true);

      // Reset form
      setFormData({
        name: "",
        lastName: "",
        email: "",
        hasTeam: "",
        teamName: "",
        nationalId: "",
        skill: "",
        linkedin: "",
        portfolio: "",
        major: "",
        university: "",
        tshirtSize: "",
      });
    } catch (err) {
      setStart(false);
      setError(true);
      setErrorMassage("Something went wrong while saving data.");
      console.error(err);
    }
  };
  if (isSaved) {
    return (
      <div className="flex flex-col items-center justify-center w-full mt-[40px]">
        <BackGround character={character} todark={dark} />
        {start && (
          <div className="text-green-500 fixed top-[50%] left-[50%] translate-x-[-50%] z-30 translate-y-[-50%] font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]">
            saving...
          </div>
        )}
        {showFrame && (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Frame extraEdit="py-[40px] px-[15px] gap-[40px] relative items-center justify-center flex flex-col">
              <WorningTitle title="Thank you" />
              <Peragraph>
                🎉 Registration completed successfully! <br /> Check your email
                for any news or updates.
              </Peragraph>
            </Frame>
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[40px]">
      <BackGround character={character} todark={dark} />
      {start && (
        <div className="text-white fixed top-[50%] left-[50%] translate-x-[-50%] z-30 translate-y-[-50%] font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]">
          Starting...
        </div>
      )}
      {showFrame && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Frame extraEdit="py-[40px] px-[15px] relative items-center justify-center flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[20px] items-center justify-center"
            >
              <WorningTitle title="Register" />
              <Peragraph>
                Register using your personal information below. <br />
                Make sure all details are accurate.
              </Peragraph>

              <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={error && !formData.name}
              />
              <FormInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={error && !formData.lastName}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={error && !formData.email}
              />

              {/* Team Section */}
              <div className="w-full flex flex-col gap-[15px] items-start">
                <Peragraph>Do you have a team?</Peragraph>
                <div className="flex items-center gap-6">
                  {["yes", "no"].map((value) => (
                    <label
                      key={value}
                      className="flex items-center gap-2 text-white"
                    >
                      <input
                        type="radio"
                        name="hasTeam"
                        value={value}
                        checked={formData.hasTeam === value}
                        onChange={handleChange}
                        className="accent-green-500 w-[20px] h-[20px]"
                      />
                      {value.toUpperCase()}
                    </label>
                  ))}
                </div>
              </div>

              <FormInput
                label="Team Name"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
              />
              <FormInput
                label="National Identification Number"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
              />
              <FormInput
                label="Your Skill"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
              />
              <FormInput
                label="LinkedIn"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
              <FormInput
                label="Portfolio / Github link"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
              />
              <FormInput
                label="Your Major"
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
              <FormInput
                label="University Name (if you are a student)"
                name="university"
                value={formData.university}
                onChange={handleChange}
              />

              {/* T-shirt size */}
              <div className="w-full flex flex-col gap-[15px] items-start">
                <Peragraph>T-Shirt Size</Peragraph>
                <div className="flex items-center gap-6">
                  {["S", "M", "L", "XL"].map((size) => (
                    <label
                      key={size}
                      className="flex items-center gap-2 text-white"
                    >
                      <input
                        type="radio"
                        name="tshirtSize"
                        value={size}
                        checked={formData.tshirtSize === size}
                        onChange={handleChange}
                        className="accent-green-500 w-[20px] h-[20px]"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-md sm:text-xl">
                  {errorMassage}
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-4">
                <Button text="Register" text="" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Unauthorized;

const FormInput = ({ label, name, value, onChange, error, type = "text" }) => (
  <div className="w-full flex flex-col gap-[15px] items-start">
    <Peragraph>{label}</Peragraph>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`border-[1px] px-[20px] text-white font-sulphur w-full h-[50px] text-md sm:text-2xl focus:outline-none focus:drop-shadow-[0_0_10px_rgba(255,255,200,0.9)] ${
        error ? "shake border-red-500" : "border-white"
      }`}
    />
  </div>
);
