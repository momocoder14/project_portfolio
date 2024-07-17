import React from "react";

const Code = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="mockup-code bg-gray-800 text-white rounded-lg shadow-lg p-4">
        <pre data-prefix="$">
          <code className="text-blue-400">npm i momocoders_technologies</code>
        </pre>
        <pre data-prefix=">" className="text-yellow-400">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-green-400">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
