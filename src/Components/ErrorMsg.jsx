// eslint-disable-next-line import/no-anonymous-default-export
export const Api401 = () => {
  return (
    <>
      <h3>API Error</h3>
      <h6>API calls return an error 401</h6>
      <div>
        You can get the error 401 in the following cases: You did not specify
        your API key in API request. Your API key is not activated yet. Within
        the next couple of hours, it will be activated and ready to use. You are
        using wrong API key in API request. Please, check your right API key in
        personal account. You have free subscription and try to get access to
        our paid services (for example, 16 days/daily forecast API, any
        historical weather data, Weather maps 2.0, etc). Please, check your
        tariff in your personal account and pay attention at our price and
        condition. Starting from 9 October 2015 our API requires a valid APPID
        for access. Note that this does not mean that our API is
        subscription-only now - please take a minute to register a free account
        to receive a key. For FOSS developers: we welcome free and open source
        software and are willing to help you. If you want to use OpenWeather
        data in your free software application please register an API key and
        file a ticket describing your application and API key registered.
        OpenWeather will review your request lift access limits for your key if
        used in open source application.
      </div>
    </>
  );
};
export const Api404 = () => {
  return (
    <>
      <h3>API Error</h3>
      <h6>API calls return an error 404</h6>
      <div>
        You can get this error in the following cases: You make a wrong API
        request. Please, check your API request. The detail documentation about
        any our weather services is here. You specify wrong city name, ZIP-code
        or city ID. This list contains the following data by locations in our
        system: City name City ID Geographical coordinates of the city (lon,
        lat) Zoom, etc
      </div>
    </>
  );
};
export const Api429 = () => {
  return (
    <>
      <h3>API Error</h3>
      <h6>API calls return an error 429</h6>
      <div>
        You will get the error 429 if you have free tariff and make more than 60
        API calls per minute. Please switch to a subscription plan that meets
        your needs or reduce the number of API calls in accordance with the
        established limits.
      </div>
    </>
  );
};
