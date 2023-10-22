import { ComponentType, useState, useEffect } from "react";
import axios from "axios";

const toCapital = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const includeUpdateResource = <P extends object>(
  Component: ComponentType<P>,
  resourceUrl: string,
  resourceName: string
) => {
  const WrappedComponent: React.FC<P> = (props) => {
    const [initialResource, setInitialResource] = useState(null);
    const [resource, setResource] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChangeResource = (updates) => {
      if (resource) {
        setResource({ ...resource, ...updates });
      }
    };

    const onPostResource = async () => {
      const response = await axios.post(resourceUrl, {
        [resourceName]: resource,
      });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onResetResource = () => {
      setResource(initialResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChangeResource,
      [`onPost${toCapital(resourceName)}`]: onPostResource,
      [`onReset${toCapital(resourceName)}`]: onResetResource,
    };

    return <Component {...props} {...resourceProps} />;
  };
  return WrappedComponent;
};
