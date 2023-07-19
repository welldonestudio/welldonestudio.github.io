import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function UnityCanvas(ctx: { loaderUrl: string, dataUrl: string, frameworkUrl: string, codeUrl: string }) {
const { unityProvider } = useUnityContext(ctx);
  return (
    <Unity unityProvider={unityProvider} style={{ width: "100%" }}/>
  );
}
