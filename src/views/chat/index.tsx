import { FC, useEffect, useReducer, useState } from "react";

export const ChatView: FC = ({ }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="grid grid-cols-2 h-full w-4/6 mt-20 mb-2">
        <div className="h-full border-x-2 border-black p-4">
          <h1 className="text-5xl mb-4">Messages</h1>
          <h2>Welcome to your inbox!</h2>
        </div>
        <div className="h-full rounded border-2 border-green-400 items-center w-full flex flex-col">
          <h2 className="text-4xl p-2 mt-4 ml-4 mb-2 self-start">[User Name]</h2>
          <div className="w-5/6">
            <ChatMessage>Hey lets work!</ChatMessage>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChatMessage = (props: any) => {
  return (
    <div className="p-2 bg-slate-300 rounded relative">
      <h3>😁[User Name]</h3>
      <p className="p-1 mb-4">{props.children}</p>
      <p className="absolute bottom-1 right-2 text-black font-semibold">11-15-2022</p>
    </div>
  );
}