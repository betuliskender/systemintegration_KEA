import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get('/datenow', function(request, reply){
    const timestamp = Date.now();
    reply.send({ timestamp });
})

fastify.get('/date', function(request, reply){
    const timestamp = Date();
    reply.send({ timestamp });
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })