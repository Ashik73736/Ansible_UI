import React from "react";
import axios, { Axios } from "axios";

function Input({ ip, setIp, req, result, setResult, loading, isLoading }) {
  return (
    <div className="input  flex h-[60vh] mt-[5%] justify-center items-center gap-4">
      <form
        className=" flex justify-center flex-col items-center bg-slate-300 w-[40%] h-[100%] rounded-md shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" text-5xl">Ansible</h1>
        <input
          type="text"
          className=" mt-7 w-[70%] h-[10%] text-2xl"
          onChange={(e) => {
            setIp(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className=" bg-black text-white w-20 h-12 text-xl rounded-md mt-5"
          onClick={req}
        >
          Run
        </button>
      </form>
      <pre className="terminal text-[12px] h-[100%] w-[40%] bg-black text-white p-9 shadow-sm rounded-md overflow-y-scroll">
        {result}
      </pre>
    </div>
  );
}

export default Input;
