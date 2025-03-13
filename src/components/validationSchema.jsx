import * as Yup from "yup";

const validationSchema = Yup.object({
  nome: Yup.string().required("Campo obrigatório"),
  cpf: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  cep: Yup.string().required("Campo obrigatório"),
  rua: Yup.string().required("Campo obrigatório"),
  numero: Yup.string().required("Campo obrigatório"),
  bairro: Yup.string().required("Campo obrigatório"),
  cidade: Yup.string().required("Campo obrigatório"),
  estado: Yup.string().required("Campo obrigatório"),
  pais: Yup.string().required("Campo obrigatório"),
  tamanho: Yup.string().required("Campo obrigatório"),
  hobbie: Yup.string().max(80, "Máximo de 80 caracteres"),
  timeComercial: Yup.string().required("Campo obrigatório"),
  aniversario: Yup.date().nullable().required("Campo obrigatório"),
  habilidades: Yup.array().min(1, "Escolha pelo menos uma opção"),
});

export default validationSchema;
    