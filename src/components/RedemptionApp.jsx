import { useEffect, useState } from "react";
import { getShipments } from "../services/api";
import WelcomeStep from "./WelcomeStep";
import SelectionStep from "./SelectionStep";
import FormStep from "./FormStep";
import CompletionStep from "./CompletionStep";
import { Box } from "@mui/material";

const steps = ["Boas-vindas", "Escolha", "Formulário", "Finalização"];

export default function RedemptionApp() {
  const [step, setStep] = useState(0);
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShipments();
        setShipments(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  console.log("shipments", shipments);

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      {step === 0 && <WelcomeStep nextStep={nextStep} />}
      {step === 1 && <SelectionStep nextStep={nextStep} prevStep={prevStep} />}
      {step === 2 && <FormStep nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <CompletionStep prevStep={() => setStep(0)} />}
    </Box>
  );
}
