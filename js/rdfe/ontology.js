/*
 *
 *  This file is part of the OpenLink Software Virtuoso Open-Source (VOS)
 *  project.
 *
 *  Copyright (C) 1998-2014 OpenLink Software
 *
 *  This project is free software; you can redistribute it and/or modify it
 *  under the terms of the GNU General Public License as published by the
 *  Free Software Foundation; only version 2 of the License, dated June 1991.
 *
 *  This program is distributed in the hope that it will be useful, but
 *  WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 *  General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 *
 */
if (!RDFE) RDFE = {};

RDFE.OM_LOAD_TEMPLATE =
  '{0}';

RDFE.OM_LOAD_PROXY_TEMPLATE =
  document.location.protocol + '//' + document.location.host + '/proxy?url={0}&output-format=turtle&force=rdf';

RDFE.OM_PREFIX_TEMPLATE =
  'http://prefix.cc/{0}.file.json';

/*
 * Ontology templates
 */
RDFE.OM_ONTOLOGY_TEMPLATE =
  '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
  '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
  '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
  '\n SELECT distinct ?o ' +
  '\n   FROM <{0}> ' +
  '\n  WHERE { ' +
  '\n          ?o a owl:Ontology . ' +
  '\n        } ' +
  '\n  ORDER BY ?c';

RDFE.OM_ONTOLOGY_CLASSES_TEMPLATE =
  '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
  '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
  '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
  '\n SELECT distinct ?c ' +
  '\n   FROM <{0}> ' +
  '\n  WHERE { ' +
  '\n          { ' +
  '\n            ?c a owl:Class . ' +
  '\n          } ' +
  '\n          union' +
  '\n          { ' +
  '\n            ?c a rdfs:Class . ' +
  '\n          } ' +
  '\n          ?c rdfs:isDefinedBy <{1}> . ' +
  '\n        } ' +
  '\n  ORDER BY ?c';

RDFE.OM_ONTOLOGY_PROPERTIES_TEMPLATE =
  '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
  '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
  '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
  '\n SELECT distinct ?p' +
  '\n   FROM <{0}>' +
  '\n  WHERE {' +
  '\n          {' +
  '\n            ?p a owl:ObjectProperty' +
  '\n          }' +
  '\n          union' +
  '\n          {' +
  '\n            ?p a owl:DatatypeProperty' +
  '\n          }' +
  '\n          union' +
  '\n          {' +
  '\n            ?p a rdf:Property' +
  '\n          } .' +
  '\n          ?p rdfs:isDefinedBy <{1}> . ' +
  '\n        }';

RDFE.OM_ONTOLOGY_INDIVIDUALS_TEMPLATE =
  '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
  '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
  '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
  '\n SELECT distinct ?i ' +
  '\n   FROM <{0}> ' +
  '\n  WHERE { ' +
  '\n          ?i a <{1}> . ' +
  '\n        } ' +
  '\n  ORDER BY ?i';

/*
 * Fresnel templates
 */
RDFE.OM_FRESNEL_LENSES_TEMPLATE =
  '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
  '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
  '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
  '\n PREFIX fresnel: <http://www.w3.org/2004/09/fresnel#> ' +
  '\n SELECT distinct ?x ' +
  '\n   FROM <{0}> ' +
  '\n  WHERE { ' +
  '\n          ?x a fresnel:Lens . ' +
  '\n        } ' +
  '\n  ORDER BY ?x';

RDFE.OM_FRESNEL_FORMATS_TEMPLATE =
  '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
  '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
  '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
  '\n PREFIX fresnel: <http://www.w3.org/2004/09/fresnel#> ' +
  '\n SELECT distinct ?x ' +
  '\n   FROM <{0}> ' +
  '\n  WHERE { ' +
  '\n          ?x a fresnel:Format . ' +
  '\n        } ' +
  '\n  ORDER BY ?x';

RDFE.OM_FRESNEL_GROUPS_TEMPLATE =
  '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
  '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
  '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
  '\n PREFIX fresnel: <http://www.w3.org/2004/09/fresnel#> ' +
  '\n SELECT distinct ?x ' +
  '\n   FROM <{0}> ' +
  '\n  WHERE { ' +
  '\n          ?x a fresnel:Group . ' +
  '\n        } ' +
  '\n  ORDER BY ?x';

RDFE.prefixes = {};
RDFE.prefixes['annotation'] = 'http://www.w3.org/2000/10/annotation-ns#';
RDFE.prefixes['atom'] = 'http://atomowl.org/ontologies/atomrdf#';
RDFE.prefixes['book'] = 'http://purl.org/NET/book/vocab#';
RDFE.prefixes['cc'] = 'http://web.resource.org/cc/';
RDFE.prefixes['dataview'] = 'http://www.w3.org/2003/g/data-view#';
RDFE.prefixes['dc'] = 'http://purl.org/dc/elements/1.1/';
RDFE.prefixes['dcterms'] = 'http://purl.org/dc/terms/';
RDFE.prefixes['foaf'] = 'http://xmlns.com/foaf/0.1/';
RDFE.prefixes['fresnel'] = 'http://www.w3.org/2004/09/fresnel#';
RDFE.prefixes['geo'] = 'http://www.w3.org/2003/01/geo/wgs84_pos#';
RDFE.prefixes['gr'] = 'http://purl.org/goodrelations/v1#';
RDFE.prefixes['ibis'] = 'http://purl.org/ibis#';
RDFE.prefixes['ical'] = 'http://www.w3.org/2002/12/cal/icaltzd#';
RDFE.prefixes['like'] = 'http://ontologi.es/like#';
RDFE.prefixes['mo'] = 'http://purl.org/ontology/mo/';
RDFE.prefixes['owl'] = 'http://www.w3.org/2002/07/owl#';
RDFE.prefixes['rdf'] = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
RDFE.prefixes['rdfs'] = 'http://www.w3.org/2000/01/rdf-schema#';
RDFE.prefixes['rev'] = 'http://purl.org/stuff/rev#';
RDFE.prefixes['rss'] = 'http://purl.org/rss/1.0/';
RDFE.prefixes['scot'] = 'http://scot-project.org/scot/ns';
RDFE.prefixes['sioc'] = 'http://rdfs.org/sioc/ns#';
RDFE.prefixes['sioct'] = 'http://rdfs.org/sioc/types#';
RDFE.prefixes['skos'] = 'http://www.w3.org/2008/05/skos#';
RDFE.prefixes['vs'] = 'http://www.w3.org/2003/06/sw-vocab-status/ns#';
RDFE.prefixes['wot'] = 'http://xmlns.com/wot/0.1/';
RDFE.prefixes['xhtml'] = 'http://www.w3.org/1999/xhtml';
RDFE.prefixes['xsd'] = 'http://www.w3.org/2001/XMLSchema#';

/*
 *
 * Debug function - dump graph
 *   - example: RDFE.graphDebug(ontologyManager.store, 'test/test.ttl')
 *
 */
RDFE.graphDebug = function(store, g) {
  var __DEBUG = 'SELECT distinct * FROM <{0}> WHERE { ?s ?p ?o} ';
  var sparql = __DEBUG.format(g);
  store.execute(sparql, function(success, results) {
    if (success) {
      console.log('--- start ---');
      for (var i = 0; i < results.length; i++) {
        console.log(results[i]["s"].value, results[i]["p"].value, results[i]["o"].value);
      }
      console.log('--- end ---');
    } else {
      alert(results);
    }
  });
}

/*
 *
 * Debug function - dump subject in the graph
 *   - example: RDFE.graphSubjectDebug(ontologyManager.store, 'http://www.w3.org/ns/auth/acl#', 'http://www.w3.org/ns/auth/acl#Append')
 *
 */
RDFE.graphSubjectDebug = function(store, g, s) {
  var __DEBUG = 'SELECT distinct * FROM <{0}> WHERE { <{1}> ?p ?o} ';
  var sparql = __DEBUG.format(g, s);
  store.execute(sparql, function(success, results) {
    if (success) {
      for (var i = 0; i < results.length; i++) {
        console.log(i, '=>', s, results[i]["p"].value, results[i]["o"].value);
      }
    } else {
      alert(results);
    }
  });
}

RDFE.sparqlValue = function(v) {
  if (!v) return null;

  return v.value;
}

/*
 *
 * Returns first non null argument
 *
 */
RDFE.coalesce = function() {
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i])
      return arguments[i];
  }
}

/*
 *
 * Extract a prefix
 *    foaf:Person => foaf
 *
 */
RDFE.uriPrefix = function(v) {
  var m = Math.max(v.lastIndexOf(':'), v.lastIndexOf('/'), v.lastIndexOf('#'))
  if ((m != -1) && (m == v.lastIndexOf(':')))
    return v.substring(0, m);

  return null;
}

/*
 *
 * Extract a label
 *    http://xmlns.com/foaf/0.1/Person => Person
 *    foaf:Person => Person
 *
 */
RDFE.uriLabel = function(v) {
  var m = Math.max(v.lastIndexOf(':'), v.lastIndexOf('/'), v.lastIndexOf('#'))
  if (m == -1)
    return v;

  if (m != v.length-1)
    return v.substring(m+1);

  return null;
}

/*
 *
 * Check for prefix
 *    foaf
 *
 */
RDFE.isUriPrefix = function(v) {
  return (Math.max(v.lastIndexOf(':'), v.lastIndexOf('/'), v.lastIndexOf('#')) == -1);
}

/*
 *
 * Extract an ontology
 *    http://xmlns.com/foaf/0.1/Person => http://xmlns.com/foaf/0.1/
 *
 */
RDFE.uriOntology = function(v) {
  var m = Math.max(v.lastIndexOf(':'), v.lastIndexOf('/'), v.lastIndexOf('#'))
  if (m != -1)
    return v.substring(0, m + 1);

  return null;
}

/*
 *
 * Denormalize URI
 *     foaf:Person => http://xmlns.com/foaf/0.1/Person
 *
 */
RDFE.uriDenormalize = function(v) {
  var prefix = RDFE.uriPrefix(v);
  if (prefix) {
    if (!RDFE.prefixes[prefix])
      RDFE.ontologyByPrefix(prefix);

    if (RDFE.prefixes[prefix])
      return RDFE.prefixes[prefix] + v.substring(prefix.length + 1);
  }
  return v;
}

/*
 *
 * Normalize URI
 *    http://xmlns.com/foaf/0.1/Person => foaf:Person
 *
 */
RDFE.uriNormalize = function(v) {
  var ontology = RDFE.uriOntology(v);
  if (ontology) {
    for (var prefix in RDFE.prefixes) {
      if (RDFE.prefixes[prefix] == ontology)
        return prefix + ':' + v.substring(ontology.length);
    }
  }
  return v;
}

/*
 *
 * Check for blank node - starting with '_:...'
 *
 */
RDFE.isBlankNode = function(v) {
  return (v.match(/^\_\:*/)) ? true : false;
}

/*
 *
 * Find ontology by prefix
 *
 */
RDFE.ontologyByPrefix = function(prefix) {
  var host = RDFE.OM_PREFIX_TEMPLATE.format(prefix);
  $.ajax({
    url: host,
    type: 'GET',
    async: false
  }).done(function(data) {
    RDFE.prefixes[prefix] = data[prefix];
  });
  return RDFE.prefixes[prefix];
}

/*
 *
 * Return all triplets related to the subject
 *   - example: RDFE.nodeQuery(ontologyManager.store, 'http://mitko.dnsalias.net:8005/DAV/home/demo/Public/test.ttl', '_:40')
 *
 */
RDFE.nodeQuery = function(store, graph, subject, properties, callback) {
  store.node(subject, graph, function(success, results) {
    if (success) {
      var returns = {};
      for (var i = 0; i < results.length; i++) {
        var p = results.triples[i].predicate.valueOf();
        var o = results.triples[i].object.valueOf();
        if (properties) {
          for (var j = 0; j < properties.length; j++) {
            if (p == RDFE.uriDenormalize(properties[j])) {
              if (!returns[properties[j]]) {
                returns[properties[j]] = o;
              }
            }
          }
        } else {
          returns[RDFE.uriNormalize(p)] = o;
        }
      }
      results = returns;
    }
    if (callback)
      callback(success, results);
  });
}

/*
 *
 * Return all objects related to the collection
 *   - RDFE.collectionQuery(ontologyManager.store, 'test/test2.ttl', 'http://xmlns.com/foaf/0.1/status', 'rdfs:domain', '_:47')
 *
 */
RDFE.collectionQuery = function(store, graph, s, p, o, m) {
  var RDFE_COLLECTION_TEMPLATE =
    '\n PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> ' +
    '\n PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> ' +
    '\n PREFIX owl: <http://www.w3.org/2002/07/owl#> ' +
    '\n PREFIX fresnel: <http://www.w3.org/2004/09/fresnel#> ' +
    '\n SELECT distinct ?item ' +
    '\n   FROM <{0}> ' +
    '\n  WHERE { ' +
    '\n          <{1}> {2}{3}/{4}rdf:first ?item. ' +
    '\n        } ';

  // check for special blank node
  if (!RDFE.isBlankNode(o)) return [o];

  var size;
  var items = [];
  var mode = (m == 'fresnel') ? '' : '/owl:unionOf';
  var rest = '';
  var nextItem = function(items) {
    return function(success, results) {
      var c;
      if (success && results.length) {
        for (var i = 0; i < results.length; i++) {
          c = RDFE.sparqlValue(results[i]["item"]);
          if (!RDFE.isBlankNode(c))
            items.push(c);
        }
      }
    };
  };
  while (true) {
    size = items.length;
    var sparql = RDFE_COLLECTION_TEMPLATE.format(graph, s, p, mode, rest);
    store.execute(sparql, nextItem(items));
    if (size == items.length)
      break;

    rest += 'rdf:rest/';
  }
  // console.log('RDFE.collectionQuery =>', p, items);
  return items;
}

/*
 *
 * Ontology Manager
 *
 */
RDFE.Config = function(source, callback) {
  var self = this;

  this.options = {};

  // RDFE.OontologyManager options
  this.options.OntologyManager = {};

  // Ontologies
  this.options.OntologyManager.OM_LOAD_TEMPLATE = RDFE.OM_LOAD_TEMPLATE;
  this.options.OntologyManager.OM_LOAD_PROXY_TEMPLATE = RDFE.OM_LOAD_PROXY_TEMPLATE;
  this.options.OntologyManager.OM_PREFIX_TEMPLATE = RDFE.OM_PREFIX_TEMPLATE;
  this.options.OntologyManager.OM_ONTOLOGY_TEMPLATE = RDFE.OM_ONTOLOGY_TEMPLATE;
  this.options.OntologyManager.OM_ONTOLOGY_CLASSES_TEMPLATE = RDFE.OM_ONTOLOGY_CLASSES_TEMPLATE;
  this.options.OntologyManager.OM_ONTOLOGY_PROPERTIES_TEMPLATE = RDFE.OM_ONTOLOGY_PROPERTIES_TEMPLATE;
  this.options.OntologyManager.OM_ONTOLOGY_INDIVIDUALS_TEMPLATE = RDFE.OM_ONTOLOGY_INDIVIDUALS_TEMPLATE;

  // Fresnel
  this.options.OntologyManager.OM_FRESNEL_LENSES_TEMPLATE = RDFE.OM_FRESNEL_LENSES_TEMPLATE;
  this.options.OntologyManager.OM_FRESNEL_FORMATS_TEMPLATE = RDFE.OM_FRESNEL_FORMATS_TEMPLATE;
  this.options.OntologyManager.OM_FRESNEL_GROUPS_TEMPLATE = RDFE.OM_FRESNEL_GROUPS_TEMPLATE;

  this.options.OntologyManager.useProxy = false;

  this.options.Templates = {};

  this.options.Bookmarks = {};

  if (!source) return;
  $.ajax({
    url: source,
    type: 'GET',
    dataType: 'json',
    success: (function(callback) {
      return function(data) {
        self.options.OntologyManager = $.extend(self.options.OntologyManager, data.OntologyManager);

        // Templates options
        self.options.Templates = $.extend(self.options.Templates, data.Templates);

        // Bookmarks options
        self.options.Bookmarks = $.extend(self.options.Bookmarks, data.bookmarks);

        if (callback) callback(self);
      };
    })(callback),
    error: function(jqXHR, textStatus, errorThrown) {
      console.error('config load =>', errorThrown);
    }
  });
}

/*
 *
 * Ontology Manager
 *
 */
RDFE.OntologyManager = function(store, config, options) {
  var self = this;

  if (!store) store = rdfstore.create();
  store.registerParser("application/rdf+xml", RDFXMLParser.parser);

  this.store = store;
  this.options = $.extend(config, options);
  this.ontologies = [];
  this.fresnels = [];
  this.templates = [];

  this.init = function(options) {
    // clean store
    for (var i = 0; i < self.ontologies.length; i++) {
      self.graphClear(self.ontologies[i].graph);
    }
    this.ontologies = [];
    for (var i = 0; i < self.fresnels.length; i++) {
      self.graphClear(self.fresnels[i].graph);
    }
    this.fresnels = [];
    this.templates = [];

    // ontologies init
    this.ontologiesParse(self.options.preloadOntologies);
    // fresnels init
    this.fresnelsParse(self.options.preloadFresnels);
  }

  this.dummy = function() {}

  this.graphClear = function(graph) {
    self.store.clear(graph, this.dummy);
  }

  this.load = function(URI, params) {
    var host = (self.options.useProxy) ? self.options.OM_LOAD_PROXY_TEMPLATE.format(encodeURIComponent(URI)) : self.options.OM_LOAD_TEMPLATE.format(URI);
    var acceptType = (params && params.acceptType) ? params.acceptType : 'text/n3; q=1, text/turtle; q=0.8, application/rdf+xml; q=0.6';
    var __ontologyLoaded = (function(URI, params) {
      return function(data, status, xhr) {
        var contentType = (xhr.getResponseHeader('content-type') || '').split(';')[0];
        self.graphClear(URI);
        self.store.load(contentType, data.trim('"'), URI, (function(params) {
          return function(success, results) {
            if (!success) {
              console.error('ontology load =>', results);
              return;
            }
            if (params && params.success)
              params.success();
          };
        })(params))
      }
    })(URI, params);
    jQuery.ajax({
      "url": host,
      "type": 'GET',
      "crossDomain": true,
      "dataType": 'text',
      "success": __ontologyLoaded,
      "beforeSend": function(xhr) {
        xhr.setRequestHeader("Accept", acceptType);
      }
    });
  }

  this.ontologyParse = function(URI, params) {
    if (params && (params.force == false) && this.ontologyByURI(URI))
      return;

    var __ontologyLoaded = (function(params) {
      return function() {
        // ontology
        var sparql = self.options.OM_ONTOLOGY_TEMPLATE.format(URI);
        self.store.execute(sparql, function(success, results) {
          if (!success) {
            console.error('ontology =>', results);
            return;
          }
          var callback;
          if (params && params.success) {
            callback = params.success;
            delete params.success;
          }
          for (var i = 0; i < results.length; i++) {
            new RDFE.Ontology(self, URI, results[i]["o"].value, params);
          }
          if (callback)
            callback();
        });
      }
    })(params);
    self.load(URI, {
      "success": __ontologyLoaded
    });
  }

  this.ontologiesParse = function(ontologies, params) {
    if (!ontologies) return;

    for (var i = 0; i < ontologies.length; i++) {
      self.ontologyParse(ontologies[i], params);
    }
  }

  this.ontologyByURI = function(URI) {
    for (var i = 0; i < self.ontologies.length; i++) {
      if (self.ontologies[i].URI == URI)
        return self.ontologies[i];
    }
    return null;
  }

  this.ontologyByPrefix = function(prefix) {
    for (var i = 0; i < self.ontologies.length; i++) {
      if (self.ontologies[i].prefix == prefix)
        return self.ontologies[i];
    }
    return null;
  }

  this.fresnelParse = function(URI, params) {
    // console.log(URI);
    var __fresnelLoaded = (function(params) {
      return function() {
        // fresnel
        var callback;
        if (params && params.callback) {
          callback = params.success;
          delete params.success;
        }
        new RDFE.Fresnel(self, URI, params);
        if (callback)
          callback();
      }
    })(params);
    self.load(URI, {
      "success": __fresnelLoaded
    });
  }

  this.fresnelsParse = function(fresnels, params) {
    if (!fresnels) return;

    for (var i = 0; i < fresnels.length; i++) {
      self.fresnelParse(fresnels[i], params);
    }
  }

  this.fresnelByURI = function(URI) {
    for (var i = 0; i < self.fresnels.length; i++) {
      if (self.fresnels[i].URI == URI)
        return self.fresnels[i];
    }
    return null;
  }

  this.templateParse = function(URI, params, callback) {
    // console.log(URI);
    new RDFE.Template(self, URI, params, callback);
  }

  this.templatesParse = function(templates, params, callback) {
    if (!templates) return;

    for (var i = 0; i < templates.length; i++) {
      self.templateParse(templates[i], params, callback);
    }
  }
}

/*
 *
 * Ontology
 *
 */
RDFE.Ontology = function(ontologyManager, graph, URI, options) {
  var self = this;

  // console.log('ontology =>', URI);
  this.options = $.extend({}, options);
  this.graph = graph;
  this.URI = URI;
  this.prefix = 'xxx';
  this.classes = [];
  this.properties = [];
  this.individuals = [];
  this.manager = ontologyManager;
  this.manager.ontologies.push(this);

  this.classByURI = function(classURI) {
    for (var i = 0; i < self.classes.length; i++) {
      if (self.classes[i].URI == classURI)
        return self.classes[i];
    }
    return null;
  }

  this.propertyByURI = function(propertyURI) {
    for (var i = 0; i < self.properties.length; i++) {
      if (self.properties[i].URI == propertyURI)
        return self.properties[i];
    }
    return null;
  }

  // ontology label, comment and etc
  this.load = function(URI) {
    self.manager.store.node(URI, self.graph, function(success, results) {
      if (!success) {
        console.error('ontology =>', results);
        return;
      }
      // console.log('ontology results =>', results.length);
      for (var i = 0; i < results.length; i++) {
        var p = results.triples[i].predicate.valueOf();
        var o = results.triples[i].object.valueOf();
        // console.log('ontology =>', p, o);
        if (p == RDFE.uriDenormalize('rdfs:label'))
          self.label = RDFE.coalesce(self.label, o);

        else if (p == RDFE.uriDenormalize('rdfs:comment'))
          self.comment = RDFE.coalesce(self.comment, o);

        else if (p == RDFE.uriDenormalize('dc:title'))
          self.title = RDFE.coalesce(self.title, o);

        else if (p == RDFE.uriDenormalize('dc:description'))
          self.description = RDFE.coalesce(self.description, o);

        else if (p == RDFE.uriDenormalize('dc:description'))
          self.comment = RDFE.coalesce(self.comment, o);
      }
    });
  }
  this.load(self.URI);
  this.load('http://nobase');

  // ontology classes
  var sparql = self.manager.options.OM_ONTOLOGY_CLASSES_TEMPLATE.format(self.graph, self.URI);
  this.manager.store.execute(sparql, function(success, results) {
    if (!success) {
      console.error('ontology =>', results);
      return;
    }
    for (var i = 0; i < results.length; i++) {
      var c = results[i]["c"].value;
      // console.log('ontology class =>', c);
      if (!RDFE.isBlankNode(c) && (c != RDFE.uriDenormalize('rdfs:Class')) && (c != RDFE.uriDenormalize('owl:Class')))
        self.classes.push(new RDFE.OntologyClass(self, c));
    }
  });

  // ontology properties
  var sparql = self.manager.options.OM_ONTOLOGY_PROPERTIES_TEMPLATE.format(self.graph, self.URI);
  this.manager.store.execute(sparql, function(success, results) {
    if (!success) {
      console.error('ontology =>', results);
      return;
    }
    for (var i = 0; i < results.length; i++) {
      self.properties.push(new RDFE.OntologyProperty(self, results[i]["p"].value));
    }
  });

  // set classes properties
  for (var i = 0; i < this.properties.length; i++) {
    var ontologyClass = this.classByURI(this.properties[i].domain);
    if (ontologyClass)
      ontologyClass.propertyAdd(this.properties[i]);
  }

  // ontology individuals
  for (var i = 0; i < self.classes.length; i++) {
    // console.log('ontology class =>', self.classes[i].URI);
    var sparql = this.manager.options.OM_ONTOLOGY_INDIVIDUALS_TEMPLATE.format(this.graph, this.classes[i].URI);
    this.manager.store.execute(sparql, function(success, results) {
      if (!success) {
        console.error('ontology individuals =>', results);
        return;
      }
      for (var j = 0; j < results.length; j++) {
        var c = results[j]["i"].value;
        if (!RDFE.isBlankNode(c))
          self.individuals.push(new RDFE.OntologyIndividual(self, c));
      }
    });
  }
}

/*
 *
 * Ontology Class
 *
 */
RDFE.OntologyClass = function(ontology, ontologyClassURI, options) {
  var self = this;

  // console.log('class =>', ontologyClassURI);
  this.options = $.extend({}, options);
  this.URI = ontologyClassURI;
  this.subClassOf = [];
  this.disjointWith = [];
  this.properties = [];
  this.ontology = ontology;

  this.propertiesClear = function() {
    self.properties = [];
  }

  this.propertyAdd = function(property) {
    for (var i = 0; i < self.properties.length; i++) {
      if (self.properties[i].URI == property.URI)
        return;
    }
    self.properties.push(property);
  }

  self.ontology.manager.store.node(ontologyClassURI, self.ontology.graph, function(success, results) {
    if (!success) {
      console.error('class =>', results);
      return;
    }
    // console.log('class results =>', results.length);
    for (var i = 0; i < results.length; i++) {
      var p = results.triples[i].predicate.valueOf();
      var o = results.triples[i].object.valueOf();
      // console.log('class =>', p, o);
      if (p == RDFE.uriDenormalize('rdfs:label'))
        self.label = RDFE.coalesce(self.label, o);

      else if (p == RDFE.uriDenormalize('rdfs:comment'))
        self.comment = RDFE.coalesce(self.comment, o);

      else if (p == RDFE.uriDenormalize('dc:title'))
        self.title = RDFE.coalesce(self.title, o);

      else if (p == RDFE.uriDenormalize('dc:description'))
        self.description = RDFE.coalesce(self.description, o);

      else if (p == RDFE.uriDenormalize('rdfs:subClassOf'))
        self.subClassOf.push(o);

      else if (p == RDFE.uriDenormalize('owl:disjointWith'))
        self.disjointWith.push(o);
    }
  });
}

/*
 *
 * Ontology Property
 *
 */
RDFE.OntologyProperty = function(ontology, ontologyPropertyURI, options) {
  var self = this;
  var store = ontology.manager.store;

  // console.log('property =>', ontologyPropertyURI);
  this.options = $.extend({}, options);
  this.URI = ontologyPropertyURI;
  this.ontology = ontology;

  store.node(ontologyPropertyURI, self.ontology.graph, function(success, results) {
    if (!success) {
      console.error('property =>', results);
      return;
    }
    // console.log('property results =>', results.length);
    for (var i = 0; i < results.length; i++) {
      var p = results.triples[i].predicate.valueOf();
      var o = results.triples[i].object.valueOf();
      // console.log('property =>', p, o);
      if (p == RDFE.uriDenormalize('rdfs:label'))
        self.label = RDFE.coalesce(self.label, o);

      else if (p == RDFE.uriDenormalize('rdfs:comment'))
        self.comment = RDFE.coalesce(self.comment, o);

      else if (p == RDFE.uriDenormalize('dc:title'))
        self.title = RDFE.coalesce(self.title, o);

      else if (p == RDFE.uriDenormalize('dc:description'))
        self.description = RDFE.coalesce(self.description, o);

      else if (p == RDFE.uriDenormalize('rdfs:subPropertyOf'))
        self.subPropertyOf = RDFE.coalesce(self.subPropertyOf, o);

      else if (p == RDFE.uriDenormalize('rdfs:range'))
        self.range = RDFE.coalesce(self.range, o);

      else if (!self.domain && (p == RDFE.uriDenormalize('rdfs:domain')))
        self.domain = RDFE.collectionQuery(self.ontology.manager.store, self.ontology.graph, ontologyPropertyURI, 'rdfs:domain', o);
    }
  });
}

/*
 *
 * Ontology Individual
 *
 */
RDFE.OntologyIndividual = function(ontology, URI, options) {
  var self = this;

  // console.log('individual =>', URI);
  this.options = $.extend({}, options);
  this.URI = URI;
  this.ontology = ontology;

  self.ontology.manager.store.node(URI, self.ontology.graph, function(success, results) {
    if (!success) {
      console.error('individual =>', results);
      return;
    }
    // console.log('individual results =>', results.length);
    for (var i = 0; i < results.length; i++) {
      var p = results.triples[i].predicate.valueOf();
      var o = results.triples[i].object.valueOf();
      // console.log('individual =>', RDFE.uriNormalize(p), o);
      if (p == RDFE.uriDenormalize('rdfs:label'))
        self.label = RDFE.coalesce(self.label, o);

      else if (p == RDFE.uriDenormalize('rdfs:comment'))
        self.comment = RDFE.coalesce(self.comment, o);

      else if (p == RDFE.uriDenormalize('dc:title'))
        self.title = RDFE.coalesce(self.title, o);

      else if (p == RDFE.uriDenormalize('dc:description'))
        self.description = RDFE.coalesce(self.description, o);

      else if (p == RDFE.uriDenormalize('rdf:type'))
        self.class = o;
    }
  });
}

/*
 *
 * Fresnel
 *
 */
RDFE.Fresnel = function(ontologyManager, URI, options) {
  // console.log('fresnel =>', URI);
  var self = this;

  this.options = $.extend({
    "lenses": true,
    "formats": false,
    "groups": false
  }, options);
  this.URI = URI;
  this.graph = URI;
  this.manager = ontologyManager;
  this.lenses = [];
  this.formats = [];
  this.groups = [];
  this.manager.fresnels.push(this);

  // fresnel lenses
  if (this.options.lenses) {
    var sparql = this.manager.options.OM_FRESNEL_LENSES_TEMPLATE.format(URI);
    this.manager.store.execute(sparql, function(success, results) {
      if (!success) {
        console.error('fresnel groups =>', results);
        return;
      }
      for (var i = 0; i < results.length; i++) {
        self.lenses.push(new RDFE.FresnelLens(self, results[i]["x"].value));
      }
    });
  }

  // fresnel formats
  if (this.options.formats) {
    var sparql = this.manager.options.OM_FRESNEL_FORMATS_TEMPLATE.format(URI);
    this.manager.store.execute(sparql, function(success, results) {
      if (!success) {
        console.error('fresnel groups =>', results);
        return;
      }
      for (var i = 0; i < results.length; i++) {
        self.formats.push(new RDFE.FresnelFormat(self, results[i]["x"].value));
      }
    });
  }

  // fresnel groups
  if (this.options.groups) {
    var sparql = this.manager.options.OM_FRESNEL_GROUPS_TEMPLATE.format(URI);
    this.manager.store.execute(sparql, function(success, results) {
      if (!success) {
        console.error('fresnel groups =>', results);
        return;
      }
      for (var i = 0; i < results.length; i++) {
        self.groups.push(new RDFE.FresnelGroup(self, results[i]["x"].value));
      }
    });
  }

  this.findLens = function(domainURI) {
    for (var i = 0; i < self.lenses.length; i++) {
      if (self.lenses[i].classLensDomain == domainURI)
        return self.lenses[i];
    }
    return null;
  }

  this.findFormat = function(propertyURI) {
    for (var i = 0; i < self.formats.length; i++) {
      if (self.formats[i].propertyFormatDomain == propertyURI)
        return self.formats[i];
    }
    return null;
  }

  this.findGroup = function(groupURI) {
    for (var i = 0; i < self.groups.length; i++) {
      if (self.groups[i].URI == groupURI)
        return self.groups[i];
    }
    return null;
  }
}

/*
 *
 * Fresnel Lens
 *
 */
RDFE.FresnelLens = function(fresnel, URI, options) {
  // console.log('fresnel lens =>', URI);
  var self = this;
  this.URI = URI;
  this.fresnel = fresnel;

  self.fresnel.manager.store.node(URI, self.fresnel.graph, function(success, results) {
    if (!success) {
      console.error('fresnel lens =>', results);
      return;
    }
    // console.log('fresnel lens =>', results.length);
    for (var i = 0; i < results.length; i++) {
      var p = results.triples[i].predicate.valueOf();
      var o = results.triples[i].object.valueOf();
      // console.log('lens =>', RDFE.uriNormalize(p), o);
      if (p == RDFE.uriDenormalize('fresnel:classLensDomain'))
        self.classLensDomain = RDFE.coalesce(self.classLensDomain, o);

      else if (p == RDFE.uriDenormalize('fresnel:instanceFormatDomain'))
        self.instanceFormatDomain = RDFE.coalesce(self.instanceFormatDomain, o);

      else if (p == RDFE.uriDenormalize('fresnel:group'))
        self.group = RDFE.coalesce(self.group, o);

      else if (p == RDFE.uriDenormalize('fresnel:purpose'))
        self.purpose = RDFE.coalesce(self.purpose, o);

      else if (p == RDFE.uriDenormalize('fresnel:showProperties'))
        self.showProperties = RDFE.collectionQuery(self.fresnel.manager.store, self.fresnel.graph, self.URI, 'fresnel:showProperties', o, 'fresnel');

      else if (p == RDFE.uriDenormalize('fresnel:hideProperties'))
        self.hideProperties = RDFE.collectionQuery(self.fresnel.manager.store, self.fresnel.graph, self.URI, 'fresnel:hideProperties', o, 'fresnel');
    }
  });
}

/*
 *
 * Fresnel Format
 *
 */
RDFE.FresnelFormat = function(fresnel, URI, options) {
  // console.log('fresnel format =>', URI);
  var self = this;
  this.fresnel = fresnel;
  this.propertyFormatDomain = [];

  self.fresnel.manager.store.node(URI, self.fresnel.graph, function(success, results) {
    if (!success) {
      console.error('fresnel format =>', results);
      return;
    }
    // console.log('fresnel format =>', results.length);
    for (var i = 0; i < results.length; i++) {
      var p = results.triples[i].predicate.valueOf();
      var o = results.triples[i].object.valueOf();
      // console.log('format =>', RDFE.uriNormalize(p), o);
      if (p == RDFE.uriDenormalize('fresnel:label'))
        self.label = RDFE.coalesce(self.label, o);

      else if (p == RDFE.uriDenormalize('fresnel:group'))
        self.group = RDFE.coalesce(self.group, o);

      else if (p == RDFE.uriDenormalize('fresnel:value'))
        self.value = RDFE.coalesce(self.value, o);

      else if (p == RDFE.uriDenormalize('fresnel:propertyStyle'))
        self.propertyStyle = RDFE.coalesce(self.propertyStyle, o);

      else if (p == RDFE.uriDenormalize('fresnel:resourceStyle'))
        self.resourceStyle = RDFE.coalesce(self.resourceStyle, o);

      else if (p == RDFE.uriDenormalize('fresnel:valueStyle'))
        self.valueStyle = RDFE.coalesce(self.valueStyle, o);

      else if (p == RDFE.uriDenormalize('fresnel:labelStyle'))
        self.labelStyle = RDFE.coalesce(self.labelStyle, o);

      else if (p == RDFE.uriDenormalize('fresnel:propertyFormatDomain'))
        self.propertyFormatDomain.push(o);
    }
  });
}

/*
 *
 * Fresnel Group
 *
 */
RDFE.FresnelGroup = function(fresnel, URI, options) {
  // console.log('fresnel group =>', URI);
  var self = this;
  this.fresnel = fresnel;

  self.fresnel.manager.store.node(URI, self.fresnel.graph, function(success, results) {
    if (!success) {
      console.error('fresnel group =>', results);
      return;
    }
    // console.log('fresnel group =>', results.length);
    for (var i = 0; i < results.length; i++) {
      var p = results.triples[i].predicate.valueOf();
      var o = results.triples[i].object.valueOf();
      // console.log('group =>', RDFE.uriNormalize(p), o);
      if (p == RDFE.uriDenormalize('fresnel:stylesheetLink'))
        self.stylesheetLink = RDFE.coalesce(self.stylesheetLink, o);

      else if (p == RDFE.uriDenormalize('fresnel:containerStyle'))
        self.containerStyle = RDFE.coalesce(self.containerStyle, o);
    }
  });
}

/*
 *
 * Templates
 *
 */
RDFE.Template = function(ontologyManager, URI, options, callback) {
  // console.log('template =>', URI);
  var self = this;

  this.options = $.extend({}, options);
  this.manager = ontologyManager;
  this.manager.templates.push(this);
  this.properties = [];

  var ontology;
  if (this.options.ontology) {
    ontology = this.options.ontology;
  } else {
    var prefix = RDFE.uriPrefix(URI);
    if (prefix) {
      ontology = this.manager.ontologyByPrefix(prefix);
      if (ontology) {
        ontology = ontology.URI;
      } else {
        ontology = RDFE.ontologyByPrefix(prefix);
      }
    } else {
      ontology = RDFE.uriOntology(URI);
    }
  }
  var __ontologyLoaded = function() {
    var __fresnelLoaded = function() {
      var hasDomain = function(property, domain) {
        if (property && property.domain) {
          for (var j = 0; j < property.domain.length; j++) {
            if (domain == property.domain[j])
              return true;
          }
        }
        return false;
      }

      var hasLens = false;
      var properties = [];
      var ontology = self.manager.ontologyByURI(self.ontology);
      if (!ontology) return;

      var fresnel = self.manager.fresnelByURI(self.fresnel);
      if (fresnel) {
        var lens = fresnel.findLens(self.URI);
        if (lens && lens.showProperties) {
          hasLens = true;
          for (var i = 0; i < lens.showProperties.length; i++) {
            var property = ontology.propertyByURI(lens.showProperties[i]);
            if (property && hasDomain(property, self.URI))
              properties.push(property);
          }
        }
      }
      if (!hasLens) {
        for (var i = 0; i < ontology.properties.length; i++) {
          if (hasDomain(ontology.properties[i], self.URI))
            properties.push(ontology.properties[i]);
        }
      }
      self.properties = properties;
      if (callback)
        callback(self);
    }
    if (self.options.fresnel) {
      self.fresnel = self.options.fresnel;
      self.manager.fresnelParse(self.fresnel, {
        "force": false,
        "success": __fresnelLoaded
      });
    } else {
      __fresnelLoaded();
    }
  }
  this.ontology = ontology;
  if (this.ontology) {
    this.URI = RDFE.uriDenormalize(URI);
    this.manager.ontologyParse(this.ontology, {
      "force": true,
      "success": __ontologyLoaded
    });
  }

  this.toBackboneForm = function() {
    var schema = {};
    for (var i = 0; i < self.properties.length; i++) {
      var property = self.properties[i];
      schema[property.URI] = {
        "title": RDFE.coalesce(property.label, property.title, RDFE.uriLabel(property.URI)),
        "help": RDFE.coalesce(property.comment, property.description)
      };
    }
    return schema;
  }
}