
  window.wxOConfiguration = {
    orchestrationID: "20251208-1130-4346-70e8-e0d2ec2e363a_20251208-1138-4420-7092-0470fc2b415b",
    hostURL: "https://ap-south-1.dl.watson-orchestrate.ibm.com",
    rootElementID: "root",
    chatOptions: {
        agentId: "e8fdc584-694e-4b42-880d-e5c98f691e28", 
        agentEnvironmentId: "111ae25f-e712-4b4b-ad2b-e422c9418ba7",
    }
  };
  setTimeout(function () {
    const script = document.createElement('script');
    script.src = `${window.wxOConfiguration.hostURL}/wxochat/wxoLoader.js?embed=true`;
    script.addEventListener('load', function () {
        wxoLoader.init();
    });
    document.head.appendChild(script);
  }, 0);                     
