const mocks = [
  {
    url: "/api/test",
    response: () => {
      return {
        code: 0,
        "data|1-10": [{
          name: "@cname",
          "age|+1":1
        }],
      };
    },
  },
];
export default mocks;
