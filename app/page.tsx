"use client"
import { PlaceholdersAndVanishInput } from "@/components/Input";
import { useState } from "react";

export default function Index() {
  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const isSupabaseConnected = canInitSupabaseClient();

  const [ etroID, setEtroID ] = useState<string>('')

  function handleSubmit(){
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    let id = ''
    for (let i = e.target.value.length - 1; i >= 0; i--){
      if (e.target.value[i] !== '/'){
        id = e.target.value[i] + id
      } else {
        break
      }
    }

    setEtroID(id)
    
  }

  const placeHolders = ['Example Etro Gearset Link', 'BLM BiS', 'SAM BiS']

  return (
    <section className="h-full w-full bg-primary flex flex-col gap-20 items-center justify-center text-blue">
        <h1 className="text-6xl font-bold">Input Etro Gearset Link</h1>
        <PlaceholdersAndVanishInput placeholders={placeHolders} onSubmit={handleSubmit} onChange={handleChange}  />
        {'etro.gg/gearset/' + etroID}
    </section>
  );
}
