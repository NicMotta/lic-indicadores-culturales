import { BarList, Title } from "@tremor/react";

const data = [
    {
        name: 'Planificación',
        value: 2,
    },
    {
        name: 'Comunicación',
        value: 1,
    },
    {
        name: 'Administración',
        value: 5,
    },
    {
        name: 'Acompañamiento del residente',
        value: 2,
    },
    {
        name: 'Evaluación / retroalimentación',
        value: 3,
    },
    {
      name: 'Otra',
      value: 1,
    },
];

export default function BarListComponent () {
  return (
  <div className="max-w-2xl my-10">
    <Title className="mb-5">¿En que área considerás que la residencia alcanzó un mejor nivel de gestión?</Title>
    {/* <Flex className="mt-4">
      <Text>
        Source
      </Text>
      <Text>
        Visitas
      </Text>
    </Flex> */}
    <BarList data={data} className="mt-2" />
  </div>
)};