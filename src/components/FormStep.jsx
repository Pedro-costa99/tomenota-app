import React from "react";
import { useFormik } from "formik";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  OutlinedInput,
  Chip,
  FormHelperText,
  Checkbox,
  Grid2,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import validationSchema from "./validationSchema";

const estadosBrasil = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const paises = ["Brasil", "Argentina", "EUA", "Portugal", "Canadá"];

const habilidades = ["React", "Node.js", "Python", "Figma", "UI/UX"];

const FormStep = ({ nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
      email: "",
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      pais: "",
      tamanho: "",
      hobbie: "",
      timeComercial: "",
      aniversario: null,
      habilidades: [],
    },
    // validationSchema,
    onSubmit: (values) => {
      console.log("Formulário enviado:", values);
      nextStep();
    },
  });

  return (
    <Box
      sx={{
        background: "#EFF6FF",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          background: "white",
          padding: "40px",
          width: "90%",
          maxWidth: "1126px",
          minHeight: "600px",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: 1,
            letterSpacing: 0,
            verticalAlign: "middle",
            textAlign: "center",
            color: "#353535",
            marginBottom: "2rem"
          }}
        >
          Finalize o seu resgate
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "1",
              letterSpacing: "0",
              color: "#353535",
              marginBottom: "1rem",
            }}
            gutterBottom
          >
            Dados do destinatário
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12 }}>
              <Box>
                <TextField
                  fullWidth
                  label="Nome Completo"
                  name="nome"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.nome && Boolean(formik.errors.nome)}
                  helperText={formik.touched.nome && formik.errors.nome}
                  margin="dense"
                  variant="standard"
                />
              </Box>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="CPF ou CNPJ"
                name="cpf"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                helperText={formik.touched.cpf && formik.errors.cpf}
                margin="dense"
                variant="standard"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="dense"
                variant="standard"
              />
            </Grid2>
          </Grid2>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "1",
              letterSpacing: "0",
              color: "#353535",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}
          >
            Endereço de entrega
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="CEP"
                name="cep"
                value={formik.values.cep}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cep && Boolean(formik.errors.cep)}
                helperText={formik.touched.cep && formik.errors.cep}
                margin="dense"
                variant="standard"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Rua"
                name="rua"
                value={formik.values.rua}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.rua && Boolean(formik.errors.rua)}
                helperText={formik.touched.rua && formik.errors.rua}
                margin="dense"
                variant="standard"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                label="Número"
                name="numero"
                value={formik.values.numero}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.numero && Boolean(formik.errors.numero)}
                helperText={formik.touched.numero && formik.errors.numero}
                margin="dense"
                variant="standard"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                label="Complemento"
                name="complemento"
                value={formik.values.complemento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.complemento &&
                  Boolean(formik.errors.complemento)
                }
                helperText={
                  formik.touched.complemento && formik.errors.complemento
                }
                margin="dense"
                variant="standard"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Bairro"
                name="bairro"
                value={formik.values.bairro}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bairro && Boolean(formik.errors.bairro)}
                helperText={formik.touched.bairro && formik.errors.bairro}
                margin="dense"
                variant="standard"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Cidade"
                name="cidade"
                value={formik.values.cidade}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cidade && Boolean(formik.errors.cidade)}
                helperText={formik.touched.cidade && formik.errors.cidade}
                margin="dense"
                variant="standard"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                select
                margin="dense"
                label="Estado"
                name="estado"
                variant="standard"
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.estado && Boolean(formik.errors.estado)}
                helperText={formik.touched.estado && formik.errors.estado}
              >
                {estadosBrasil.map((estado) => (
                  <MenuItem key={estado} value={estado}>
                    {estado}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 3 }}>
              <TextField
                fullWidth
                select
                margin="dense"
                label="País"
                name="pais"
                variant="standard"
                value={formik.values.pais}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pais && Boolean(formik.errors.pais)}
                helperText={formik.touched.pais && formik.errors.pais}
              >
                {paises.map((pais) => (
                  <MenuItem key={pais} value={pais}>
                    {pais}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>
          </Grid2>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "1",
              letterSpacing: "0",
              color: "#353535",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}
          >
            Tamanho
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                select
                margin="dense"
                label="Qual o seu tamanho (Camisetas)?"
                name="tamanho"
                variant="standard"
                value={formik.values.tamanho}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.tamanho && Boolean(formik.errors.tamanho)}
                helperText={formik.touched.tamanho && formik.errors.tamanho}
              >
                <MenuItem value="P">P</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="G">G</MenuItem>
              </TextField>
            </Grid2>
          </Grid2>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "1",
              letterSpacing: "0",
              color: "#353535",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}
          >
            Perguntas Extras
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Qual o seu hobbie?"
                name="hobbie"
                variant="standard"
                value={formik.values.hobbie}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.hobbie && Boolean(formik.errors.hobbie)}
                helperText={formik.touched.hobbie && formik.errors.hobbie}
                margin="dense"
              />
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                select
                margin="dense"
                variant="standard"
                label="Você fará parte do time comercial?"
                name="timeComercial"
                value={formik.values.timeComercial}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.timeComercial &&
                  Boolean(formik.errors.timeComercial)
                }
                helperText={
                  formik.touched.timeComercial && formik.errors.timeComercial
                }
              >
                <MenuItem value="Sim">Sim</MenuItem>
                <MenuItem value="Não">Não</MenuItem>
              </TextField>
            </Grid2>

            <Grid2 item size={{ xs: 12, md: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Qual a sua data de aniversário?"
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      size: "medium",
                      variant: "standard",
                      sx: {
                        mt: 1,
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                select
                margin="dense"
                label="Habilidades"
                name="habilidades"
                variant="standard"
                value={formik.values.habilidades}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.habilidades &&
                  Boolean(formik.errors.habilidades)
                }
                helperText={
                  formik.touched.habilidades && formik.errors.habilidades
                }
                slotProps={{
                  select: {
                    multiple: true,
                    renderValue: (selected) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          alignItems: "center",
                        }}
                      >
                        {selected.map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            size="small"
                            onDelete={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const newHabilidades =
                                formik.values.habilidades.filter(
                                  (item) => item !== value
                                );
                              formik.setFieldValue(
                                "habilidades",
                                newHabilidades
                              );
                            }}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            sx={{
                              fontSize: "15px",
                            }}
                          />
                        ))}
                      </Box>
                    ),
                    MenuProps: {
                      PaperProps: {
                        onClick: (e) => e.stopPropagation(),
                      },
                    },
                  },
                }}
              >
                {habilidades.map((habilidade) => (
                  <MenuItem key={habilidade} value={habilidade}>
                    <Checkbox
                      checked={
                        formik.values.habilidades.indexOf(habilidade) > -1
                      }
                    />
                    {habilidade}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>
          </Grid2>

          <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              onClick={prevStep}
              sx={{
                width: 81,
                height: 43,
                gap: 1,
                paddingTop: "12px",
                paddingRight: "20px",
                paddingBottom: "12px",
                paddingLeft: "20px",
                borderRadius: "61px",
                borderWidth: "1px",
                borderColor: "var(--Cinza-1, #64748B)",
                color: "#64748B",
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              Voltar
            </Button>

            <Button
              variant="contained"
              type="submit"
              onClick={formik.handleSubmit}
              sx={{
                width: 108,
                height: 43,
                gap: 1,
                paddingTop: "12px",
                paddingRight: "20px",
                paddingBottom: "12px",
                paddingLeft: "20px",
                borderRadius: "61px",
                backgroundColor: "#22007F",
                color: "#FFFFFF",
                textTransform: "none",
                fontSize: "14px",
                lineHeight: 1,
              }}
            >
              Continuar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default FormStep;
