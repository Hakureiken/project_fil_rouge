<?php
use Slim\Factory\AppFactory;
use Slim\Routing\RouteContext;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandlerInterface;

require_once __DIR__ . "/../config/config.inc.php";
require __DIR__ . '/../vendor/autoload.php';


$app = AppFactory::create();
/**************************  Activer globalement l'accès au site **************************/
$app->add(function (Request $request, RequestHandlerInterface $handler): Response {
    $routeContext = RouteContext::fromRequest($request);
    $routingResults = $routeContext->getRoutingResults();
    $methods = $routingResults->getAllowedMethods();
    $requestHeaders = $request->getHeaderLine('Access-Control-Request-Headers');
    $response = $handler->handle($request);
    $response = $response->withHeader('Access-Control-Allow-Origin', '*');
    $response = $response->withHeader('Access-Control-Allow-Methods', implode(',', $methods));
    $response = $response->withHeader('Access-Control-Allow-Headers', $requestHeaders);
    return $response;
});

$app->addRoutingMiddleware();

$app -> get('/', function (Request $request, Response $response, $args) {
    global $bdd;
    
});
?>