import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080/auth',
          //url: 'http://192.168.0.8:8080/auth',
          realm: 'consumidor',
          clientId: 'app-web'
        },
        initOptions: {
          checkLoginIframe: true,
          checkLoginIframeInterval: 25
        }
      })
}